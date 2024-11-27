import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import ImageOne from '../../assets/images/user-1.svg';
import ImageTwo from '../../assets/images/user-2.svg';
import ImageThree from '../../assets/images/user-3.svg';
import ImageFour from '../../assets/images/user-4.svg';
import ImageFive from '../../assets/images/user-5.svg';
import ImageSix from '../../assets/images/user-6.svg';

const WhatUserSays = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const handleScroll = () => {
            const cardWidth = 300;
            const scrollLeft = container.scrollLeft;
            const index = Math.round(scrollLeft / cardWidth);
            setActiveIndex(index);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='px-5 sm:px-20 min-h-[650px] pt-20 pb-10 text-white bg-[#430000]'>
            <h2 className='text-center text-2xl sm:text-5xl font-semibold'>What users say</h2>
            <p className='text-center mt-3'>We won't compromise giving you quality</p>
            <div
                ref={containerRef}
                className='mt-10 overflow-x-scroll flex items-center gap-10 h-[400px] pl-10 select-none'
            >
                {Content.map((content, index) => (
                    <motion.div
                        key={content.id}
                        className='relative h-[300px] w-[300px] p-[2px] gradient rounded-xl flex-shrink-0'
                        initial={{ scale: 1 }}
                        animate={{
                            scale: index === activeIndex ? 1.2 : 1,
                            zIndex: index === activeIndex ? 10 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                            scrollSnapAlign: 'center',
                        }}
                    >
                        <div className='w-full h-full bg-[#430000] rounded-lg flex flex-col justify-between p-5'>
                            <p>{content.content}</p>
                            <div className='flex items-center gap-2'>
                                <div className='h-[40px] w-[40px] rounded-full overflow-hidden'>
                                    <img src={content.author_image} alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <h3 className='text-sm font-semibold'>{content.author_name}</h3>
                                    <small className='text-xs'>{content.role}</small>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhatUserSays;

const Content = [
    {
        id: 1,
        content: `I earn by just streaming my favorite movies, ustream is a game changer.`,
        author_name: `John`,
        role: 'Actor',
        author_image: ImageOne
    },
    {
        id: 2,
        content: `I love to watch my favorite shows as I learn at the same time. Ustream is life-changing for me.`,
        author_name: `Maxwell`,
        role: 'Student',
        author_image: ImageTwo
    },
    {
        id: 3,
        content: `I enjoy the seamless experience. Ustream has made things easier for me.`,
        author_name: `Daniel`,
        role: 'Marketer',
        author_image: ImageThree
    },
    {
        id: 4,
        content: `Streaming some dance shows on Ustream has helped me to polish my dancing skills.`,
        author_name: `Christopher`,
        role: 'Dancer',
        author_image: ImageFour
    },
    {
        id: 5,
        content: `It is way cheaper than other streaming platforms I have tried before.`,
        author_name: `Janet`,
        role: 'Singer',
        author_image: ImageFive
    },
    {
        id: 6,
        content: `It feels great to stream live as I get to connect with others.`,
        author_name: `Zach`,
        role: 'Streamer',
        author_image: ImageSix
    },
];
