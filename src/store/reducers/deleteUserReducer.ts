import {UserDeleteActionTypes, UserDeleteAction, UserDeleteState} from "../../types/deleteUser";
import {toast} from "react-toastify";

const initialState : UserDeleteState = {
    error: null,
    loading: false,
}

export const userDeleteReducer = (state = initialState, action: UserDeleteAction): UserDeleteState => {
    switch (action.type) {
        case UserDeleteActionTypes.FETCH_DELETE_USER:
            return {...state, loading: true}
        case UserDeleteActionTypes.FETCH_DELETE_USER_SUCCESS:
            toast.success('Success deleted')
            return {...state, loading: false}
        case UserDeleteActionTypes.FETCH_DELETE_USER_ERROR:
            toast.error(`${action.payload}`)
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
