import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {}

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  public async get(key: string): Promise<any> {
    if (!this._storage) {
      await this.init();
    }

    return this._storage?.get(key) || '';
  }

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  public async set(key: string, value: any): Promise<any> {
    if (!this._storage) {
      await this.init();
    }

    return this._storage?.set(key, value);
  }

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  public async remove(key: string): Promise<any> {
    return this._storage?.remove(key);
  }

  public async clear(): Promise<void> {
    return this._storage?.clear();
  }

  public async keys(): Promise<string[] | undefined> {
    return this._storage?.keys();
  }
}
