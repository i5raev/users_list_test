import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {Button, LoadingSpinner, UserForm} from "../../components";
import {validationSchema} from "../../validations/formValidation";
import {IUser} from "../../models/IUser";
import {useActions} from "../../hooks/useActions";
import {UseTypedSelector} from "../../hooks/useTypedSelector";
import moment from "moment";
import {useHistory} from "react-router-dom";

const UserEditPage = () => {
    const {user,error,loading} = UseTypedSelector(state => state.userDetail);
    const {fetchUpdateUser,fetchAllUsers} = useActions();
    const history = useHistory();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<IUser>({
        resolver: yupResolver(validationSchema),
        defaultValues: user,
    });

    const onSubmit = (data: IUser) => {
        const formattedDate = moment(data.birth_date, 'YYYY[-MM[-DD]]').format().slice(0, 10)
        const newData = {...data, birth_date: formattedDate};
        fetchUpdateUser(newData, user.id);
        fetchAllUsers();
        history.push('/')
    };

    if(loading){
        return <LoadingSpinner/>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return (
        <div className='container'>
            <h1>Edit User</h1>
            <UserForm
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                register={register}
                errors={errors}
            >
                <div className="mt-5">
                    <Button
                        border="none"
                        color="#ffffff"
                        backgroundColor="#2d8dd6"
                        width="150px"
                        height="auto"
                        type='submit'
                        radius="5px"
                        children="Edit user"
                        padding='10px 20px'
                    />
                </div>
            </UserForm>
        </div>
    );
};

export default UserEditPage;
