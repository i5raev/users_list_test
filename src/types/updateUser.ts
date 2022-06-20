export interface UserUpdateState {
    loading: boolean;
    error: null | string;
}

export enum UserUpdateActionTypes {
    FETCH_UPDATE_USER = 'FETCH_UPDATE_USER',
    FETCH_UPDATE_USER_SUCCESS = 'FETCH_UPDATE_USER_SUCCESS',
    FETCH_UPDATE_USER_ERROR = 'FETCH_UPDATE_USER_ERROR',
}

interface FetchUpdateUserAction {
    type: UserUpdateActionTypes.FETCH_UPDATE_USER;
}

interface FetchUpdateUserSuccessAction {
    type: UserUpdateActionTypes.FETCH_UPDATE_USER_SUCCESS;
}

interface FetchUpdateUserErrorAction {
    type: UserUpdateActionTypes.FETCH_UPDATE_USER_ERROR;
    payload: string;
}

export type UserUpdateAction =
    FetchUpdateUserAction |
    FetchUpdateUserSuccessAction |
    FetchUpdateUserErrorAction
