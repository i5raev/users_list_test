import React, {useEffect} from 'react';
import styles from './style.module.scss';
import {Button, LoadingSpinner} from "../index";
import {useParamsId} from "../../hooks/useParamsId";
import {useHistory, useParams} from "react-router-dom";
import {UseTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";


const UserDetail: React.FC = ()  => {
    const {
        user_detail,
        info_item,
        btns
    } = styles

    const {id} = useParamsId();
    const history = useHistory();

    const {user,error,loading} = UseTypedSelector(state => state.userDetail);
    const {fetchUserDetail} = useActions();

    useEffect(() => {
        fetchUserDetail(id)
    },[]);

    const {fetchDeleteUser} = useActions()


    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        fetchDeleteUser(id)
    }

    const handleUpdate = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        history.push(`/edit/${id}`)
    }


    if(loading){
        return <LoadingSpinner/>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return (
        <div className={user_detail}>
            <h1>User Info:</h1>
            <div className={info_item}>
                <span>First Name:</span>
                <p>{user.first_name}</p>
            </div>
            <div className={info_item}>
                <span>Last Name:</span>
                <p>{user.last_name}</p>
            </div>
            <div className={info_item}>
                <span>Birth Date:</span>
                <p>{user.birth_date}</p>
            </div>
            <div className={info_item}>
                <span>Gender:</span>
                <p>{user.gender}</p>
            </div>
            <div className={info_item}>
                <span>Job:</span>
                <p>{user.job}</p>
            </div>
            <div className={info_item}>
                <span>Biography:</span>
                <p>{user.biography}</p>
            </div>
            <div className={info_item}>
                <span>Active:</span>
                <p>{user.is_active ? 'true' : 'false'}</p>
            </div>
            <div className={btns}>
                <Button
                    border="none"
                    color="#ffffff"
                    backgroundColor="#db4130"
                    width="100px"
                    height="auto"
                    onClick={handleDelete}
                    radius="5px"
                    children="Delete"
                    padding='10px 20px'
                />
                <Button
                    border="none"
                    color="#ffffff"
                    backgroundColor="#32a852"
                    width="100px"
                    height="auto"
                    onClick={handleUpdate}
                    radius="5px"
                    children="Edit"
                    padding='10px 20px'
                />
            </div>
        </div>
    );
};

export default UserDetail;
