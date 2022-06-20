import React from 'react';
import styles from './style.module.scss';
import {Button} from "../index";
import {Link} from 'react-router-dom';
import {IUser} from "../../models/IUser";
import {useActions} from "../../hooks/useActions";

const UserItem: React.FC<IUser> = ({
                                       id,
                      birth_date,
                      first_name,
                      last_name,
                      gender,
})  => {
    const {
        user_item,
        user_item_inner,
        left,
        right
    } = styles
    const {fetchDeleteUser,fetchAllUsers} = useActions()

    const handleDelete = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        fetchDeleteUser(id);

        setTimeout(() => {
            fetchAllUsers()
        },500)

    }

    return (
        <Link to={`/users/${id}`} className={user_item}>
            <div className={user_item_inner}>
                <div className={left}>
                    <p>{first_name}</p>
                    <p>{last_name}</p>
                    <p>{birth_date}</p>
                    <p>{gender}</p>
                </div>
                <div className={right}>
                    <Button
                        border="none"
                        color="#ffffff"
                        backgroundColor="#db4130"
                        width="auto"
                        height="auto"
                        onClick={handleDelete}
                        radius="5px"
                        children="Delete"
                        padding='10px 20px'
                    />
                </div>
            </div>
        </Link>
    );
};

export default UserItem;
