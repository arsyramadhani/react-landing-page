import React from 'react';
import Button from '../Button';
import { BsShieldLock } from 'react-icons/bs';

const items = [
    { title: 'Home' },
    { title: 'About' },
    { title: 'Promotions' },
    { title: 'Career' },
    { title: 'News' },
    { title: 'Apply Online' },
];

const Header = () => {
    return (
        <div className='flex flex-row px-2 md:px-40  h-16 md:h-20 items-center  bg-white fixed top-0 z-50 w-full shadow-lg'>
            <div className='flex-1 flex items-center gap-4'>
                <div className='font-bold text-2xl mr-4'>Personal</div>
                <ul className='gap-4 hidden md:flex '>
                    {items.map(el => (
                        <li className='text-base font-normal'>
                            {el.title.toUpperCase()}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='inline-block'>
                <Button text='Login' type='secondary' icon={<BsShieldLock />} />
            </div>
        </div>
    );
};

export default Header;
