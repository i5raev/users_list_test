import {IUser} from "../models/IUser";

export interface UserDetailState {
    user: IUser;
    loading: boolean;
    error: null | string;
}

export enum UserDetailActionTypes {
    FETCH_USER_DETAIL = 'FETCH_USER_DETAIL',
    FETCH_USER_DETAIL_SUCCESS = 'FETCH_USER_DETAIL_SUCCESS',
    FETCH_USER_DETAIL_ERROR = 'FETCH_USER_DETAIL_ERROR',
}

interface FetchUserDetailAction {
    type: UserDetailActionTypes.FETCH_USER_DETAIL;
}

interface FetchUserDetailSuccessAction {
    type: UserDetailActionTypes.FETCH_USER_DETAIL_SUCCESS;
    payload: IUser;
}

interface FetchUserDetailErrorAction {
    type: UserDetailActionTypes.FETCH_USER_DETAIL_ERROR;
    payload: string;
}


export type UserDetailAction =
    FetchUserDetailAction |
    FetchUserDetailSuccessAction |
    FetchUserDetailErrorAction
