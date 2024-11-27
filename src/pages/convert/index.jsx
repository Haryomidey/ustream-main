import React from 'react'
import HeaderBack from '../../components/HeaderBack'
import Container from '../../components/Container'
import { MdOutlineSwapVert } from "react-icons/md";

import { FaPlay } from "react-icons/fa";
import Button from '../../components/Button';

const Convert = () => {
    return (
        <Container>
            <HeaderBack heading={'Convert'} text={'Convert your $stream to your preferred coin'} />
            <div className='px-5 sm:px-20 mt-20'>
                <p className='text-text'>Account</p>
                <div className='flex flex-col gap-5 mt-3 relative'>
                    <div className='border w-full h-[120px] rounded-lg bg-[#17171f] p-5'>
                        <div className='flex items-center justify-between text-text text-sm'>
                            <p>From</p>
                            <p>Available Balance 10</p>
                        </div>
                        <div className='flex items-center justify-between mt-3'>
                            <p>$USTREAM</p>
                            <div className='flex items-center gap-1'>
                                <input type="text" className='w-[35px] bg-transparent text-sm' placeholder='0.05' />
                                <p className='w-[1px] bg-text h-[20px]'></p>
                                <p className='gradient-text ml-1'>MAX</p>
                            </div>
                        </div>
                    </div>
                    <p className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-6xl text-white gradient rounded-full cursor-pointer'><MdOutlineSwapVert /></p>
                    <div className='border w-full h-[120px] rounded-lg bg-[#17171f] p-5'>
                        <div className='flex items-center justify-between text-text text-sm'>
                            <p>To</p>
                        </div>
                        <div className='flex items-center justify-between mt-3'>
                            <div>
                                <p>TON</p>
                                <small className='-mt-1 text-text'>Ton</small>
                            </div>
                            <div className='flex items-center gap-1'>
                                <p className='gradient-text ml-1 flex items-center gap-1'>
                                    <span className='h-[1px] w-[6px] bg-text'></span>
                                    <span className='h-[1px] w-[6px] bg-text'></span>
                                    <span className='h-[1px] w-[6px] bg-text'></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-1 relative mt-5'>
                    <div className='bg-text w-full h-[1px] mt-5'></div>
                    <p className='absolute top-[50%] translate-y-[-10%] left-[50%] translate-x-[-50%] bg-[#302f2f] px-2'>Or</p>
                    <div className='bg-text w-full h-[1px] mt-5'></div>
                </div>
                <p className='text-text mt-20'>Account</p>
                <div className='border w-full rounded-lg bg-[#17171f] p-5 mt-3'>
                    <div className='flex items-center gap-4'>
                        <p className='gradient h-[30px] w-[40px] rounded-md grid place-items-center text-[#302f2f]'>
                            <FaPlay />
                        </p>
                        <p>Start Streaming to Earn $USTREAM</p>
                    </div>
                </div>
                <div className='mt-5'>
                    <Button background={'yes'}>Quote</Button>
                </div>
            </div>
        </Container>
    )
}

export default Convert
