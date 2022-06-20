import {IUser} from "../models/IUser";

export interface UsersState {
    users: IUser[];
    loading: boolean;
    error: null | string;
}

export enum UsersActionTypes {
    FETCH_ALL_USERS = 'FETCH_ALL_USERS',
    FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS',
    FETCH_ALL_USERS_ERROR = 'FETCH_ALL_USERS_ERROR',
}

interface FetchUsersAction {
    type: UsersActionTypes.FETCH_ALL_USERS;
}

interface FetchUsersSuccessAction {
    type: UsersActionTypes.FETCH_ALL_USERS_SUCCESS;
    payload: IUser[];
}

interface FetchUsersErrorAction {
    type: UsersActionTypes.FETCH_ALL_USERS_ERROR;
    payload: string;
}


export type UsersAction =
    FetchUsersAction |
    FetchUsersSuccessAction |
    FetchUsersErrorAction
