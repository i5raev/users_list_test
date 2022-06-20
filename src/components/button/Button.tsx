import React from "react";

interface ButtonProps {
    border: string;
    backgroundColor: string;
    color: string;
    children?: React.ReactNode;
    height: string;
    onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void;
    radius: string
    width: string;
    padding: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
                                           type="button",
                                           border,
                                           backgroundColor,
                                           color,
                                           children,
                                           height,
                                           onClick,
                                           radius,
                                           width,
                                           padding
                                 }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            style={{
                backgroundColor,
                border,
                color,
                borderRadius: radius,
                height,
                width,
                padding
            }}
        >
            {children}
        </button>
    );
}

export default Button;
