import React from "react";

interface InputProps {
    register: any,
    errors: any,
    name: string,
    type: string,
    label: string,
    classes?: string,
}

const Input: React.FC<InputProps> = ({
                                         register,
                                         errors,
                                         name,
                                         type,
                                         label,
                                         classes
                                 }) => {
    return (
        <div className={`form-group ${classes} mt-3`}>
            <label>{label}</label>
            {type === 'textarea' ?
                <textarea
                    type={type}
                    {...register(name)}
                    className={`form-control ${
                        errors[name] ? 'is-invalid' : ''
                    }`}
                />
                :
                <input
                    type={type}
                    {...register(name)}
                    className={`form-control ${
                        errors[name] ? 'is-invalid' : ''
                    }`}
                />
            }

            <div className="invalid-feedback">
                <p>{errors[name]?.message}</p>
            </div>
        </div>
    );
}

export default Input;
