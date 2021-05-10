import React from 'react';
import { RiSafe2Line, RiHandCoinLine } from 'react-icons/ri';
import { BsCreditCard } from 'react-icons/bs';

const items = [
    {
        title: 'Open Account',
        icon: <RiSafe2Line />,
    },
    {
        title: 'Credit Card',
        icon: <BsCreditCard />,
    },
    {
        title: 'Get Loan',
        icon: <RiHandCoinLine />,
    },
];

const Feature = () => {
    return (
        <div className='h-14 relative w-full left-0 px-4 lg:px-40 bg-gray-200 '>
            <div className='w-full h-28 py-2 -translate-y-1/2 transform  bg-white rounded-2xl border-2 border-gray-100 shadow-lg flex justify-center items-center gap-0.5'>
                {items.map(el => (
                    <button
                        className={`h-full items-center flex flex-col justify-center px-2 lg:px-12 gap-2 cursor-pointer rounded-none hover:rounded-lg hover:bg-gray-100 flex-1 ${
                            el.title === 'Credit Card'
                                ? 'border-gray-300 border-r-2 border-l-2'
                                : null
                        }`}>
                        <div className='text-4xl'>{el.icon}</div>
                        <p>{el.title}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Feature;
