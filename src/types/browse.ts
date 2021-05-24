
export enum browseActionType {
    FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS',
    FETCH_GENRES_ERROR = 'FETCH_GENRES_ERROR',
    FETCH_NEW_RELEASES_SUCCESS = 'FETCH_NEW_RELEASES_SUCCESS',
    FETCH_NEW_RELEASES_ERROR = 'FETCH_NEW_RELEASES_ERROR',
    FETCH_FEATURED_SUCCESS = 'FETCH_FEATURED_SUCCESS',
    FETCH_FEATURED_ERROR = 'FETCH_FEATURED_ERROR',
    SET_LOADED = 'SET_LOADED'

}

export interface setLoadedActionType  {
   type: browseActionType.SET_LOADED,
   payload: boolean,
   
}

export interface fetchGenresSuccessType  {
   type: browseActionType.FETCH_GENRES_SUCCESS,
   categories:any
}
export interface fetchGenresErrorType {
   type: browseActionType.FETCH_GENRES_ERROR,
}

export interface fetchNewReleasesSuccessType {
    type: browseActionType.FETCH_NEW_RELEASES_SUCCESS,
    newReleases:any
 }


 export interface fetchNewReleasesError {
    type: browseActionType.FETCH_NEW_RELEASES_ERROR,
 }

 export interface fetchFeaturedSuccess {
   type: browseActionType.FETCH_FEATURED_SUCCESS,
   featured:any
}
export interface fetchFeaturedError {
   type: browseActionType.FETCH_FEATURED_ERROR,
}

export type browseActions = setLoadedActionType | fetchGenresSuccessType 
| fetchGenresErrorType | fetchNewReleasesSuccessType | fetchNewReleasesError | fetchFeaturedSuccess | fetchFeaturedError;
