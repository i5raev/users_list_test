import React from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { yupResolver } from '@hookform/resolvers/yup';
import {useHistory} from "react-router-dom";

import {Button, UserForm} from "../../components";
import {validationSchema} from "../../validations/formValidation";
import {IUser} from "../../models/IUser";
import {useActions} from "../../hooks/useActions";


const UserAddPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<IUser>({
        resolver: yupResolver(validationSchema),
        defaultValues: {},
    });

    const {fetchAddUser, fetchAllUsers} = useActions();
    const history = useHistory();

    const onSubmit = (data: IUser) => {
        const formattedDate = moment(data.birth_date, 'YYYY[-MM[-DD]]').format().slice(0, 10)
        const newData = {...data, birth_date: formattedDate};
        fetchAddUser(newData);
        fetchAllUsers();
        history.push('/')
    };

    return (
        <div className='container'>
            <h1>Add User</h1>
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
                            children="Add user"
                            padding='10px 20px'
                        />
                        <Button
                            border="none"
                            color="#ffffff"
                            backgroundColor="#ebc334"
                            width="150px"
                            height="auto"
                            type='button'
                            radius="5px"
                            children="Reset"
                            padding='10px 20px'
                            onClick={() => reset()}
                        />
                    </div>
                </UserForm>
        </div>
    );
};

export default UserAddPage;
