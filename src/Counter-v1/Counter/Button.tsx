import React from 'react';

interface IButtonType {
    name: string
    className: string
    disabled: boolean
    callBack: () => void
}

export const Button = ({name, disabled, className, callBack}: IButtonType) => {
    const handlerClick = () => callBack()

    return (
        <button
            className={(disabled) ? `${className} ${className + '__disable'}` : className}
            disabled={disabled}
            onClick={handlerClick}
        >
            {name}
        </button>
    )
};

