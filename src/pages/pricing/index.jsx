import React, { useState } from 'react';
import Container from '../../components/Container';
import HeaderBack from '../../components/HeaderBack';
import Button from '../../components/Button';

import { IoMdCheckmark } from "react-icons/io";

const Pricing = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    return (
        <Container>
            <HeaderBack heading={'Get unlimited access.'} text={'Find perfect plan. Cancel anytime.'} />
            
            <div className="flex justify-center mt-6 bg-[#340707] w-fit p-1 rounded-full mx-auto">
                <button
                    onClick={() => setIsMonthly(false)}
                    className={`px-4 py-2 ${!isMonthly ? 'gradient text-white' : ''} rounded-full`}
                >
                    Yearly
                </button>
                <button
                    onClick={() => setIsMonthly(true)}
                    className={`px-4 py-2 ${isMonthly ? 'gradient' : ''} rounded-full`}
                >
                    Monthly
                </button>
            </div>

            <div className="mt-8 space-y-6">
                <div className="border border-dashed border-[#ff9090] rounded-xl p-6 bg-black text-white h-[300px] flex flex-col justify-between">
                    <h3 className="text-xl font-semibold">Free</h3>
                    <div className="mt-4">
                        <Button className="w-full py-2 rounded-full hover:bg-red-500 hover:text-white transition">
                            Get Started
                        </Button>
                    </div>
                    <ul className="mt-4 space-y-2 text-gray-400">
                        <li className="flex items-center">
                            <span className="text-white mr-2"><IoMdCheckmark /></span> Stream Movies
                        </li>
                    </ul>
                </div>

                <div className="rounded-xl p-6 bg-gradient-to-br from-[#250e0e] to-[#4d2727] text-white">
                    <h3 className="text-xl font-semibold">Premium</h3>
                    <div className='w-full flex items-center justify-center'>
                        <p className="text-2xl font-semibold mt-2 ">
                            {isMonthly ? '$1.00' : '$10.00'}
                            <span className="text-sm font-normal text-text">/{isMonthly ? 'Month' : 'Year'}</span>
                        </p>
                    </div>
                    <div className="mt-4">
                        <button className="w-full py-4 gradient text-white rounded-lg hover:bg-red-700 transition">
                            Get Started
                        </button>
                    </div>
                    <div>
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
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Pricing;
