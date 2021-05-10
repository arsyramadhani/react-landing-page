import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { HeaderContents as contents } from '../../utils/HeaderContents';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Button from '../Button';

const Banner = () => {
    const [hover, setHover] = useState(false);
    const [state, setState] = useState({ currentSlide: 0 });
    const setting = {
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '160px',
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    centerPadding: '32px',
                },
            },
            {
                breakpoint: 600,
                settings: {
                    centerPadding: '16px',
                },
            },
        ],
        nextArrow: <Arrow direction='right' hover={hover} />,
        prevArrow: <Arrow direction='left' hover={hover} />,
    };
    return (
        <div
            className='w-full h-header-l relative mt-16 '
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <Slider {...setting}>
                {contents.map((el, i) => (
                    <div key={i} className='relative h-header-l px-2 '>
                        <div className=' z-10 absolute w-12/12 lg:w-6/12  h-full px-4 lg:px-20 flex flex-col gap-4 justify-center items-start'>
                            <h1 className='text-5xl text-white font-bold '>
                                Special Offer in The Holy Month of Ramadhan
                            </h1>
                            <p className='text-lg text-white'>
                                Click to share with your loved onees
                            </p>
                            <Button type='primary' text='Learn More' />
                        </div>
                        <div className='relative w-full h-full z-0 filter brightness-50 rounded-xl overflow-hidden'>
                            <Image
                                layout='fill'
                                objectFit='cover'
                                src={el.src}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const Arrow = ({ className, onClick, direction, hover }) => {
    return (
        <div
            className={
                (className,
                `flex absolute z-20 h-header-l top-0  items-center  ${
                    direction === 'right' ? 'right-16' : 'left-16'
                } `)
            }>
            <button
                className={`p-4 bg-white hover:bg-gray-300 text-black rounded-full  focus:outline-none shadow-lg transform transition-all ${
                    hover ? 'block' : 'hidden'
                }  `}
                onClick={onClick}>
                {direction === 'right' ? <FaChevronRight /> : <FaChevronLeft />}
            </button>
        </div>
    );
};

export default Banner;
