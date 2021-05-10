import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
const Button = ({ text, ClickHandler, type, icon }) => {
    const onClickHandler = e => {
        ClickHandler();
    };

    return (
        <button
            onClick={onClickHandler}
            className={`font-semibold group px-4 py-3 rounded-lg transform transition-colors hover:bg-gray-200 flex items-center gap-2
                ${
                    type === 'primary' &&
                    'bg-blue-400 hover:bg-blue-500 text-black'
                }
                ${
                    type === 'secondary' &&
                    'bg-none border-2 border-black hover:bg-gray-200 text-black'
                }
                ${type === 'more' && 'bg-none  hover:bg-gray-300 text-black'}
            `}>
            {icon && <div className='text-2xl'>{icon}</div>}
            {text}
            {type === 'more' && (
                <div className='text-xl text-blue-500 group-hover:'>
                    <FaArrowRight />
                </div>
            )}
        </button>
    );
};

export default Button;
