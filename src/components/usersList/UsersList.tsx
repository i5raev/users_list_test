import React, {FC, useEffect} from 'react';
import styles from './style.module.scss';
import {LoadingSpinner, UserItem} from "../index";
import {UseTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const UsersList : FC = ()  => {
    const {users_list} = styles

    const {users,error,loading} = UseTypedSelector(state => state.users);
    const {fetchAllUsers} = useActions();

    useEffect(() => {
        fetchAllUsers()
    },[]);

    if(loading){
        return <LoadingSpinner/>
    }
    if(error){
        return <h1>{error}</h1>
    }

    return (
        <div className={users_list}>
            {users.map(item => (
                <React.Fragment key={item.id}>
                    <UserItem {...item}/>
                </React.Fragment>
            ))}
        </div>
    );
};

export default UsersList;
