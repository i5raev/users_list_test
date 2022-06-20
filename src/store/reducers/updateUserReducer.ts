import {UserUpdateActionTypes, UserUpdateAction, UserUpdateState} from "../../types/updateUser";
import {toast} from "react-toastify";

const initialState : UserUpdateState = {
    error: null,
    loading: false,
}

export const userUpdateReducer = (state = initialState, action: UserUpdateAction): UserUpdateState => {
    switch (action.type) {
        case UserUpdateActionTypes.FETCH_UPDATE_USER:
            return {...state, loading: true}
        case UserUpdateActionTypes.FETCH_UPDATE_USER_SUCCESS:
            toast.success('Success updated')
            return {...state, loading: false}
        case UserUpdateActionTypes.FETCH_UPDATE_USER_ERROR:
            toast.error(`${action.payload}`)
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
