import {UserDetailActionTypes, UserDetailAction, UserDetailState} from "../../types/getUserDetail";

const initialState : UserDetailState = {
    user: {
        "id": 0,
        "first_name": '',
        "last_name": '',
        "birth_date": '',
        "gender": '',
        "job": 'string',
        "biography": 'string',
        "is_active": false
    },
    error: null,
    loading: false,
}

export const userDetailReducer = (state = initialState, action: UserDetailAction): UserDetailState => {
    switch (action.type) {
        case UserDetailActionTypes.FETCH_USER_DETAIL:
            return {...state, loading: true}
        case UserDetailActionTypes.FETCH_USER_DETAIL_SUCCESS:
            return {...state, loading: false, user: action.payload}
        case UserDetailActionTypes.FETCH_USER_DETAIL_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
