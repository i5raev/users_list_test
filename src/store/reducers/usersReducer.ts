import {UsersActionTypes, UsersAction, UsersState} from "../../types/getUsers";

const initialState : UsersState = {
    users: [],
    error: null,
    loading: false,
}

export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
    switch (action.type) {
        case UsersActionTypes.FETCH_ALL_USERS:
            return {...state, loading: true}
        case UsersActionTypes.FETCH_ALL_USERS_SUCCESS:
            return {...state, loading: false, users: action.payload}
        case UsersActionTypes.FETCH_ALL_USERS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
