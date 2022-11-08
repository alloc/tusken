import { Pool, PoolClient } from 'pg'
import type { ConnectionLike } from 'tusken'

export class TuskenPool extends Pool {
  declare stream?: ConnectionLike['stream']

  override connect(): Promise<PoolClient>
  override connect(
    callback: (
      err: Error,
      client: PoolClient,
      done: (release?: any) => void
    ) => void
  ): void
  override connect(
    callback?: (
      err: Error,
      client: PoolClient,
      done: (release?: any) => void
    ) => void
  ) {
    if (callback) {
      super.connect((err, client, done) => {
        callback(err, client && this._augmentClient(client), done)
      })
    } else {
      return super.connect().then(client => {
        return this._augmentClient(client)
      })
    }
  }

  protected _augmentClient(client: PoolClient) {
    const augmentedClient = client as PoolClient & {
      stream?: ConnectionLike['stream']
    }
    augmentedClient.stream = this.stream?.bind(client)
    return augmentedClient
  }
}
