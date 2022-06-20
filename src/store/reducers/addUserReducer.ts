import {UserAddActionTypes, UserAddAction, UserAddState} from "../../types/addUser";
import {toast} from "react-toastify";

const initialState : UserAddState = {
    error: null,
    loading: false,
}

export const userAddReducer = (state = initialState, action: UserAddAction): UserAddState => {
    switch (action.type) {
        case UserAddActionTypes.FETCH_ADD_USER:
            return {...state, loading: true}
        case UserAddActionTypes.FETCH_ADD_USER_SUCCESS:
            toast.success('Success added')
            return {...state, loading: false}
        case UserAddActionTypes.FETCH_ADD_USER_ERROR:
            toast.error(`${action.payload}`)
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
