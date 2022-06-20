import {Dispatch} from "redux";
import {url} from "../../services/axios";
import {UserAddAction, UserAddActionTypes} from "../../types/addUser";
import {IUser} from "../../models/IUser";

export const fetchAddUser = (data:IUser) => {
    return async (dispatch: Dispatch<UserAddAction>) => {
        try {
            dispatch({type: UserAddActionTypes.FETCH_ADD_USER})
            const response = await url.post('/contact/', data, {

            });
            dispatch({type: UserAddActionTypes.FETCH_ADD_USER_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: UserAddActionTypes.FETCH_ADD_USER_ERROR,
                payload: 'Произошла ошибка при добавлении пользователя'
            })
        }
    }
}

