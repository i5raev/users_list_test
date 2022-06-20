import {combineReducers} from "redux";

import {usersReducer} from "./usersReducer";
import {userDetailReducer} from "./userDetailReducer";
import {userAddReducer} from "./addUserReducer";
import {userDeleteReducer} from "./deleteUserReducer";
import {userUpdateReducer} from "./updateUserReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    userDetail: userDetailReducer,
    userAdd: userAddReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
})

export type RootState = ReturnType<typeof rootReducer>
