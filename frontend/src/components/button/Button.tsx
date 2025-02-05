import React, { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    varint: "small" | "big";
    color: "violet" | "blue" | "purple";
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    varint,
    color,
    className,
    children,
    ...rest
}) => {

    const baseClasses = "flex flex-col rounded-[16px] text-white";

    const varintButtonClasses = {
        "small": "h-[65px] min-w-[168px] font-semibold pt-[8px]",
        "big": "h-[52px] font-bold",
    };

    const colorButtonClasses = {
        "violet": "bg-violet-dark",
        "blue": "bg-blue-light",
        "purple": "bg-purple-primary",
    };

    const buttonClasses = classNames(
        baseClasses,
        varintButtonClasses[varint],
        colorButtonClasses[color],
        className
    );

    return (
        <button className={buttonClasses} {...rest}>
            {children}
        </button>
    )
}

export default Button;
