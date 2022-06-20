import React from 'react';
import {Form} from "react-bootstrap";

interface SelectProps {
    register: any,
    name: string,
    classes? :string,
    options: { name: string, id: number}[]
}

const Select: React.FC<SelectProps> = ({
                                         register,
                                         name,
                                           classes,
                                        options,
                                     }) => {
    return (
        <div className={`form-group mt-3 ${classes}`}>
            <Form.Select {...register(name)}>
                {options.map(item => (
                    <option key={item.id} value={item.name}>{item.name}</option>
                ))}
            </Form.Select>
        </div>
    );
};

export default Select;
