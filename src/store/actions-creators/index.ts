import * as UsersActionCreators from './getUsersAction';
import * as UserDetailActionCreators from './getUserDetailAction';
import * as UserAddActionCreators from './addUserAction';
import * as UserDeleteActionCreators from './deleteUserAction';
import * as UserUpdateActionCreators from './updateUserAction';

export default {
    ...UsersActionCreators,
    ...UserDetailActionCreators,
    ...UserAddActionCreators,
    ...UserDeleteActionCreators,
    ...UserUpdateActionCreators,
}
