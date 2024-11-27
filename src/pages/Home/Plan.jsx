import React from 'react';
import { IoIosCheckmarkCircle, IoMdCheckmark } from "react-icons/io";
import Button from '../../components/Button';
import FAQs from './FAQs';

const Plan = () => {
    return (
        <div className='px-5 sm:px-20 pt-20 bg-[#4A0000] min-h-[650px] text-white'>
            <h2 className='text-center text-2xl sm:text-5xl font-semibold'>Choose the perfect plan for you</h2>
            <p className='text-center mt-3'>We have got the best plan set out for you to start your content creation journey</p>

            <div className='flex items-center justify-center gap-10 mt-10'>
                <div className='h-[420px] rounded-lg border-2 border-dotted border-[#ff9090] p-5 w-[50%] max-w-[350px] relative'>
                    <h2>Free</h2>
                    <p className='w-full h-[1px] gradient mt-20'></p>
                    <div className='flex items-center gap-4 mt-6'>
                        <div className='w-[20px] h-[20px] rounded-full gradient p-[2px]'>
                            <p className='w-full h-full rounded-full grid place-items-center'><IoIosCheckmarkCircle /></p>
                        </div>
                        <p>Stream Movies</p>
                    </div>
                    <div className='w-[90%] absolute bottom-5 flex justify-center'>
                        <Button background={'yes'} className='min-w-full'>Get Started</Button>
                    </div>
                </div>
                <div className='h-[420px] rounded-lg p-[2px] w-[50%] max-w-[350px] relative gradient'>
                    <div className='rounded-lg bg-[#4A0000] h-full overflow-hidden'>
                        <div className='gradient h-[50px]'>

                        </div>
                        <div className='p-5'>
                            <h2>Premium</h2>
                            <div>
                                $1 <small className='text-xs text-[#ae8484]'>/month</small>
                            </div>
                            <p className='w-full h-[1px] gradient mt-10'></p>
                            <div className='flex items-center gap-4 mt-6'>
                                <div className='w-[20px] h-[20px] rounded-full gradient p-[2px]'>
                                    <p className='w-full h-full rounded-full grid place-items-center'><IoMdCheckmark /></p>
                                </div>
                                <p>Stream Movies</p>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <div className='w-[20px] h-[20px] rounded-full gradient p-[2px]'>
                                    <p className='w-full h-full rounded-full grid place-items-center'><IoMdCheckmark /></p>
                                </div>
                                <p>Download Movies</p>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <div className='w-[20px] h-[20px] rounded-full gradient p-[2px]'>
                                    <p className='w-full h-full rounded-full grid place-items-center'><IoMdCheckmark /></p>
                                </div>
                                <p>Earn</p>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <div className='w-[20px] h-[20px] rounded-full gradient p-[2px]'>
                                    <p className='w-full h-full rounded-full grid place-items-center'><IoMdCheckmark /></p>
                                </div>
                                <p>Vote</p>
                            </div>
                            <div className='w-[90%] absolute bottom-5 flex justify-center'>
                                <Button background={'yes'} className='min-w-full'>Get Started</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FAQs />
        </div>
    )
}

export default Plan
