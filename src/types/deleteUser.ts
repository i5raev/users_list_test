export interface UserDeleteState {
    loading: boolean;
    error: null | string;
}

export enum UserDeleteActionTypes {
    FETCH_DELETE_USER = 'FETCH_DELETE_USER',
    FETCH_DELETE_USER_SUCCESS = 'FETCH_DELETE_USER_SUCCESS',
    FETCH_DELETE_USER_ERROR = 'FETCH_DELETE_USER_ERROR',
}

interface FetchDeleteUserAction {
    type: UserDeleteActionTypes.FETCH_DELETE_USER;
}

interface FetchDeleteUserSuccessAction {
    type: UserDeleteActionTypes.FETCH_DELETE_USER_SUCCESS;
}

interface FetchDeleteUserErrorAction {
    type: UserDeleteActionTypes.FETCH_DELETE_USER_ERROR;
    payload: string;
}

export type UserDeleteAction =
    FetchDeleteUserAction |
    FetchDeleteUserSuccessAction |
    FetchDeleteUserErrorAction
