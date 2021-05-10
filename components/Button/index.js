import React from 'react';

const Button = ({ text, ClickHandler, type, icon }) => {
    const onClickHandler = e => {
        ClickHandler();
    };

    return (
        <button
            onClick={onClickHandler}
            className={`font-semibold px-4 py-3 rounded-lg transform transition-colors hover:bg-gray-200 flex items-center gap-2
                ${
                    type === 'primary' &&
                    'bg-yellow-400 hover:bg-yellow-500 text-black'
                }
                ${
                    type === 'secondary' &&
                    'bg-none border-2 border-black hover:bg-gray-200 text-black'
                }
            `}>
            {icon && <div className='text-2xl'>{icon}</div>}
            {text}
            {type === 'more' && <div className='text-2xl'>{icon}</div>}
        </button>
    );
};

export default Button;
