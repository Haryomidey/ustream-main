import React from 'react'
import Button from '../../components/Button';

import Solflare from '../../assets/images/solflare.png';
import Metamask from '../../assets/images/metamask.svg';
import Phantom from '../../assets/images/phantom.svg';
import Coinbase from '../../assets/images/coinbase.svg';
import Trustwallet from '../../assets/images/trustwallet.svg';


const HeroSection = () => {
    return (
        <div className='bg-[#0000009c] w-full h-full'>
            <main className='w-full h-full flex flex-col items-center justify-center text-white relative'>
                <p className='text-[#d9d9d9] text-sm'>Watch Movies. Earn Crypto.</p>
                <h1 className='text-[70px] font-bold'>Stream & Earn with Ustream</h1>
                <p className='text-[#dddddd]'>Discover a way to enjoy your favorite films and earn cryptocurrency at the same time</p>
                <div className='mt-4 flex items-center gap-5'>
                    <Button background={'yes'}>
                        <div className='px-10 py-2'>Sign up</div>
                    </Button>
                    <Button>
                        <div className='px-10 py-2'>Learn More</div>
                    </Button>
                </div>
                <div className='absolute bottom-0 left-0 right-0'>
                    <marquee behavior="" direction="" className='backdrop-blur-2xl h-[100px]  flex items-center w-full'>
                        <div className='w-full flex items-center gap-44 justify-between text-white font-medium'>
                            <div className='flex items-center gap-2'>
                                <img src={Solflare} alt="" className='w-[50px]'/>
                                <p>Solflare</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={Metamask} alt="" />
                                <p>Metamask</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={Phantom} alt="" />
                                <p>Phantom</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={Coinbase} alt="" />
                                <p>Coinbase</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={Trustwallet} alt="" />
                                <p>Trustwallet</p>
                            </div>
                        </div>
                    </marquee>
                </div>
            </main>
        </div>
    )
}

export default HeroSection
