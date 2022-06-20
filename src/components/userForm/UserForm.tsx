import React from 'react';
import {Checkbox, Input, Select} from "../index";

interface FormProps {
    handleSubmit: any,
    onSubmit: any,
    register: any,
    errors :any,
    children: React.ReactNode,
}

const UserForm: React.FC<FormProps> = ({
                                           handleSubmit,
                                           onSubmit,
                                           register,
                                           errors,
                                           children
                                       }) => {
    const genderOptions = [
        {name: 'male',id: 1},
        {name: 'female',id: 2}
    ]

    return (
        <div className="register-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input  register={register} errors={errors} name={'first_name'} type={'text'} label={'First Name'}/>
                <Input  register={register} errors={errors} name={'last_name'} type={'text'} label={'Last Name'}/>
                <Input  register={register} errors={errors} name={'birth_date'} type={'date'} label={'Birth Date'}/>
                <Input  register={register} errors={errors} name={'job'} type={'text'} label={'Job'}/>
                <Input  register={register} errors={errors} name={'biography'} type={'textarea'} label={'Biography'}/>
                <Checkbox  register={register} errors={errors} name={'is_active'} type={'checkbox'} label={'Is_active'}/>
                <Select register={register} name={'gender'} options={genderOptions}/>
                {children}
            </form>
        </div>
    );
};

export default UserForm;
