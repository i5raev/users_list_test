import React, {FC} from 'react';
import styles from './style.module.scss';
import {Button} from "../index";
import {useHistory} from "react-router-dom";

const Header : FC = ()  => {
    const {
        header,
    } = styles
    const history = useHistory();

    const handleAddUser = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        history.push('/add')
    }

    return (
        <div className={header}>
            <h1>Users: </h1>
            <Button
                border="none"
                color="#ffffff"
                backgroundColor="#2d8dd6"
                width="auto"
                height="auto"
                onClick={handleAddUser}
                radius="5px"
                children="Add user"
                padding='10px 20px'
            />
        </div>
    );
};

export default Header;
