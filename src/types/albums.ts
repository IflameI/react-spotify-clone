export enum albumsActionType {
  FETCH_ALBUMS_PENDING = 'FETCH_ALBUMS_PENDING',
  FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS',
}

export interface fetchPendingAlbumsActionType {
  type: albumsActionType.FETCH_ALBUMS_PENDING;
}

export interface fetchAlbumsSuccessType {
  type: albumsActionType.FETCH_ALBUMS_SUCCESS;
  payload: any;
}

export type albumsActions = fetchAlbumsSuccessType | fetchPendingAlbumsActionType;
