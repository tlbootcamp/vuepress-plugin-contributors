export interface Contributor {
  id: string;
  name: string;
  profileUrl: string;
  profilePic?: string;
  timestamp?: Date;
}
export type CommitSHA = string;
export type CacheData = Record<CommitSHA, Contributor>;
