import React from 'react'
import BackgroundImage from '../../assets/images/cinema-chair.svg';

import IconOne from '../../assets/images/icon-1.svg';
import IconTwo from '../../assets/images/icon-2.svg';
import IconThree from '../../assets/images/icon-3.svg';
import IconFour from '../../assets/images/icon-4.svg';

const SecondSection = () => {
    return (
        <div className='min-h-[600px]' style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%'
        }}>
            <div className='w-full min-h-[600px] h-full bg-[#000000bd] backdrop-blur-[10px] px-5 sm:px-20 pt-20 pb-10 text-center text-white'>
                <h1 className='text-5xl font-bold mb-2'>What to expect</h1>
                <p>We wont compromise giving you quality</p>

                <div className='grid grid-cols-2 gap-10 mt-10'>
                    {Content.map((content, index) => (
                        <div key={index} className='h-[250px] gradient rounded-xl overflow-hidden p-[3px]'>
                            <div className='w-full h-full bg-[#250101e3] backdrop-blur-[10px] rounded-lg text-left'>
                                <div className='flex justify-between'>
                                    <div className='p-4'>
                                        <img src={content.icon} alt="" />
                                        <h1 className='mt-3 text-4xl font-semibold max-w-[90%]'>{content.title}</h1>
                                    </div>
                                </div>
                                <p className='px-4 max-w-[70%]'>{content.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SecondSection

const Content = [
    {
        icon: IconOne,
        title: 'Stream & Earn',
        detail: `Earn cryptocurrency rewards for every movie you watch`,
        image:  'https://source.unsplash.com/1600x900/?movie,streaming',
    },
    {
        icon: IconTwo,
        title: 'Exclusive Content',
        detail: `Access a vast library of exclusive movies and shows`,
        image:  'https://source.unsplash.com/1600x900/?movie,streaming',
    },
    {
        icon: IconThree,
        title: 'Secure & Transparent',
        detail: `Powered by blockchain technology for secure and transparent transactions.`,
        image:  'https://source.unsplash.com/1600x900/?movie,streaming',
    },
    {
        icon: IconFour,
        title: 'Community Driven',
        detail: `Join a community of movie lovers and crypto earners.`,
        image:  'https://source.unsplash.com/1600x900/?movie,streaming',
    },
]
