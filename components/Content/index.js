import React from 'react';

const Content = ({ children, title, subtitle, primary }) => {
    return (
        <div
            className={` px-4 lg:px-40 py-12 flex flex-col  ${
                primary && 'bg-gray-200'
            }`}>
            {/* Top */}
            <div className='flex flex-col lg:flex-row '>
                <div className='flex-1'>
                    <h1 className='font-bold text-3xl mb-2'>{title}</h1>{' '}
                    <p className='text-base to-gray-400'>{subtitle}</p>
                </div>
                <div className='flex-1  justify-end items-end hidden lg:flex'>
                    <button>sdads</button>
                </div>
            </div>
            {/* Bottom */}
            <div className='flex flex-col lg:flex-row gap-2 mt-4'>
                {children}
            </div>
        </div>
    );
};

export default Content;
