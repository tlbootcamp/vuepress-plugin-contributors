export interface Contributor {
  name: string;
  profileUrl: string;
  profilePic?: string;
  updatedAt?: Date;
}
export type CommitSHA = string;
export type CacheData = Record<CommitSHA, Contributor>;
