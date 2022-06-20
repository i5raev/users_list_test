import React from "react";

interface InputProps {
    register: any,
    errors: any,
    name: string,
    type: string,
    label: string,
    classes?: string,
}

const Checkbox: React.FC<InputProps> = ({
                                         register,
                                         errors,
                                         name,
                                         type,
                                 }) => {
    return (
        <div className='form-group form-check mt-3'>
            <input
                type={type}
                {...register(name)}
                className={`form-check-input ${
                    errors[name] ? 'is-invalid' : ''
                }`}
            />
            <label htmlFor={name} className="form-check-label">
                Active
            </label>
            <div className="invalid-feedback">
                <p>{errors[name]?.message}</p>
            </div>
        </div>
    );
}

export default Checkbox;
