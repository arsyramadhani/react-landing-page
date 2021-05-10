import Image from 'next/image';
import React from 'react';
import Button from '../Button';
import Tag from '../Tag';

const Card = ({ tags, img, title, description, date }) => {
    return (
        <div className='bg-gray-400 w-full h-96 rounded-xl shadow-md border border-gray-300 relative overflow-hidden hover:shadow-xl transform transition-all    hover:-translate-y-2 duration-200 ease-in-out'>
            {tags && (
                <div className='absolute z-10 top-4 left-4'>
                    <Tag text={tags} any='bg-yellow-400' />
                </div>
            )}
            <div className='w-full h-64  relative'>
                {img && <Image layout='fill' objectFit='cover' src={img} />}
            </div>
            <div className='p-4 bg-white rounded-xl absolute bottom-0 w-full '>
                <p className='text-gray-500 text-sm'>{date}</p>
                <h5 className='text-2xl font-bold to-gray-800'>{title}</h5>
                <p className='text-gray-600'>{description}</p>
                <div className='h-4' />
                <Button type='primary' text='Learn More' />
            </div>
        </div>
    );
};

export default Card;
