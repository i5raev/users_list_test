import {Dispatch} from "redux";
import {url} from "../../services/axios";
import {UserDeleteAction, UserDeleteActionTypes} from "../../types/deleteUser";

export const fetchDeleteUser = (id:number) => {
    return async (dispatch: Dispatch<UserDeleteAction>) => {
        try {
            dispatch({type: UserDeleteActionTypes.FETCH_DELETE_USER})
            const response = await url.delete(`/contact/${id}/`);
            dispatch({type: UserDeleteActionTypes.FETCH_DELETE_USER_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: UserDeleteActionTypes.FETCH_DELETE_USER_ERROR,
                payload: 'Произошла ошибка при удалении пользователя'
            })
        }
    }
}

