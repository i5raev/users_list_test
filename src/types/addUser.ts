export interface UserAddState {
    loading: boolean;
    error: null | string;
}

export enum UserAddActionTypes {
    FETCH_ADD_USER = 'FETCH_ADD_USER',
    FETCH_ADD_USER_SUCCESS = 'FETCH_ADD_USER_SUCCESS',
    FETCH_ADD_USER_ERROR = 'FETCH_ADD_USER_ERROR',
}

interface FetchAddUserAction {
    type: UserAddActionTypes.FETCH_ADD_USER;
}

interface FetchAddUserSuccessAction {
    type: UserAddActionTypes.FETCH_ADD_USER_SUCCESS;
}

interface FetchAddUserErrorAction {
    type: UserAddActionTypes.FETCH_ADD_USER_ERROR;
    payload: string;
}

export type UserAddAction =
    FetchAddUserAction |
    FetchAddUserSuccessAction |
    FetchAddUserErrorAction
