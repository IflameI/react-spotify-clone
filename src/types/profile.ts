
export enum profileActionType {
     SET_LOADED = 'SET_LOADED',
     FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
     FETCH_USER_ERROR = 'FETCH_USER_ERROR'
}

export interface setLoadedActionType  {
    type: profileActionType.SET_LOADED,
    payload: boolean,

}

export interface fetchUserSuccessType  {
    type: profileActionType.FETCH_USER_SUCCESS,
    payload:any
 }
 export interface fetchUserErrorType {
    type: profileActionType.FETCH_USER_ERROR,
}

export type profileActions = setLoadedActionType | fetchUserSuccessType | fetchUserErrorType;
