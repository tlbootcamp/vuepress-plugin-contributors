import { readFileSync, writeFileSync } from 'fs';
import { CacheData, CommitSHA, Contributor } from './types';

export default class Cache {
    cache: CacheData;

    private readonly cachePath: string;

    constructor(cachePath: string) {
      this.cache = Cache.loadCache(cachePath);
      this.cachePath = cachePath;
    }

    get(key: CommitSHA): Contributor | undefined {
      return this.cache[key];
    }

    set(key: CommitSHA, value: Contributor): void {
      this.cache[key] = { ...value, timestamp: new Date() };
    }

    delete(key: CommitSHA): void {
      delete this.cache[key];
    }

    saveCache(): void {
      const data = JSON.stringify(this.cache);
      writeFileSync(this.cachePath, data, { encoding: 'utf8' });
    }

    private static loadCache(cachePath: string): CacheData {
      let file: string;
      try {
        file = readFileSync(cachePath, { encoding: 'utf8' });
      } catch (e) {
        file = '';
      }
      return file ? JSON.parse(file) : {};
    }
}
