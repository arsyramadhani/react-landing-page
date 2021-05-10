import Image from 'next/image';
import React from 'react';
import Button from '../Button';
import Tag from '../Tag';

const Card = () => {
    return (
        <div className='bg-gray-400 w-full h-96 rounded-xl shadow-md border border-gray-300 relative overflow-hidden hover:shadow-xl transform transition-all    hover:-translate-y-2 duration-200 ease-in-out'>
            <div className='absolute z-10 top-4 left-4'>
                <Tag text='Story' any='bg-yellow-400' />
            </div>
            <div className='w-full h-64  relative'>
                <Image
                    layout='fill'
                    objectFit='cover'
                    src='/images/jakob-rosen-Nu6rvCl8h5w-unsplash.jpg'
                />
            </div>
            <div className='p-4 bg-white rounded-xl absolute bottom-0 w-full '>
                <p className='text-gray-500 text-sm'>Date</p>
                <h5 className='text-2xl font-bold to-gray-800'>Title</h5>
                <p className='text-gray-600'>
                    Descr sad sds sdsad sdkja skd jaksjd lkasjd kasjd
                    klsjdklajklsdj akl
                </p>
                <div className='h-4' />
                <Button type='primary' text='Learn More' />
            </div>
        </div>
    );
};

export default Card;
