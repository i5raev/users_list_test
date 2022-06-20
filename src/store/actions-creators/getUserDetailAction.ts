import {Dispatch} from "redux";
import {url} from "../../services/axios";
import {UserDetailAction, UserDetailActionTypes} from "../../types/getUserDetail";


export const fetchUserDetail = (id: number) => {
    return async (dispatch: Dispatch<UserDetailAction>) => {
        try {
            dispatch({type: UserDetailActionTypes.FETCH_USER_DETAIL})
            const response = await url.get(`/contact/${id}`);
            dispatch({type: UserDetailActionTypes.FETCH_USER_DETAIL_SUCCESS, payload: response.data})
        }catch (e){
            dispatch({
                type: UserDetailActionTypes.FETCH_USER_DETAIL_ERROR,
                payload: 'Произошла ошибка при загрузке пользователя'
            })
        }
    }
}

