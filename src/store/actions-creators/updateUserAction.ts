import {Dispatch} from "redux";
import {url} from "../../services/axios";
import {UserUpdateAction, UserUpdateActionTypes} from "../../types/updateUser";
import {IUser} from "../../models/IUser";

export const fetchUpdateUser = (data:IUser, id: number) => {
    return async (dispatch: Dispatch<UserUpdateAction>) => {
        try {
            dispatch({type: UserUpdateActionTypes.FETCH_UPDATE_USER})
            const response = await url.put(`/contact/${id}/`, data);
            dispatch({type: UserUpdateActionTypes.FETCH_UPDATE_USER_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: UserUpdateActionTypes.FETCH_UPDATE_USER_ERROR,
                payload: 'Произошла ошибка при добавлении пользователя'
            })
        }
    }
}

