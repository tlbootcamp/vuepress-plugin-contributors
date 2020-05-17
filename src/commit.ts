import { exec } from 'child_process';
import { promisify } from 'util';
import axios, { AxiosResponse } from 'axios';
import Cache from './cache';
import { Contributor } from './types';

const aexec = promisify(exec);

const cache = new Cache(process.env.CACHE_PATH as string);
const owner = process.env.GITHUB_OWNER as string;
const repository = process.env.GITHUB_REPO as string;
const authToken = process.env.AUTH_TOKEN as string;
const api = 'https://api.github.com/graphql';

// eslint-disable-next-line no-shadow
function buildQuery(owner: string, repository: string, hashes: Array<string>): string {
  let query = `{repository(owner: "${owner}", name: "${repository}") {`;
  for (const hash of hashes) {
    hash.replace(/\s+/, '');
    if (!hash) {
      continue;
    }
    query += `_${hash}: object(oid: "${hash}") {
    ... on Commit {
      author {
        user {
          avatarUrl
          name
          login
          url
        }
      }
    }
  }
`;
  }
  query += '}}';
  return query;
}

interface GitHubUser {
  avatarUrl: string;
  name: string;
  login: string;
  url: string;
}
interface GitHubAuthor {
  user: GitHubUser;
}
interface GitHubCommit {
  author: GitHubAuthor;
}
type GitHubHistory = Record<string, GitHubCommit>;
interface GitHubResponseData {
  repository: GitHubHistory;
}
interface GitHubResponse {
  data: GitHubResponseData;
}

function updateCacheWithCommits(response: GitHubResponse): void {
  const commits = response.data.repository;
  for (const [hash, commit] of Object.entries(commits)) {
    const { user } = commit.author;
    const contributor = {
      name: user.name || user.login,
      profileUrl: user.url,
      profilePic: user.avatarUrl,
    } as Contributor;
    cache.set(hash.replace(/_/, ''), contributor);
  }
  cache.saveCache();
}

export default async function updateCacheForFile(filePath: string): Promise<void> {
  const { stdout, stderr } = await aexec(`git log --pretty=format:"%H%n" ${filePath}`);
  if (stderr) {
    console.error(stderr);
    return;
  }
  const hashes = stdout.split('\n').filter((hash) => cache.get(hash) === undefined);
  const query = buildQuery(owner, repository, hashes);
  let response: AxiosResponse;
  try {
    response = await axios.post(api, { query }, {
      headers: { Authorization: `bearer ${authToken}` },
    });
  } catch (e) {
    console.error(stderr);
    return;
  }
  updateCacheWithCommits(response.data);
}
