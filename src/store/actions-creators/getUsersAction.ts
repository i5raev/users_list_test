import {Dispatch} from "redux";
import {url} from "../../services/axios";
import {UsersAction, UsersActionTypes} from "../../types/getUsers";


export const fetchAllUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch({type: UsersActionTypes.FETCH_ALL_USERS})
            const response = await url.get('/contact/');
            dispatch({type: UsersActionTypes.FETCH_ALL_USERS_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: UsersActionTypes.FETCH_ALL_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке списка дел'
            })
        }
    }
}

