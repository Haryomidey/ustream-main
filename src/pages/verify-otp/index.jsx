import React from 'react'
import Logo from '../../assets/images/logo.svg';
import Left from '../../assets/images/auth-half-left.svg';
import Main from '../../assets/images/auth-main.svg';
import Right from '../../assets/images/auth-half-right.svg';
import Google from '../../assets/images/google.svg';
import Metamask from '../../assets/images/metamask-icon.svg';
import Email from '../../assets/images/email.svg';

import { FaEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { Link } from 'react-router-dom';

const VerifyOtp = () => {
    return (
        <main className='bg-[#4A0000] flex items-center justify-between gap-5 min-h-screen'>
            <div className='w-[35%] h-screen bg-[#5b1919] text-white'>
                <img src={Logo} className='p-5' />

                <h1 className='text-xl sm:text-3xl text-center font-semibold mt-8 px-5'>Enjoy your favorite films and earn cryptocurrency </h1>
                <div className='flex justify-between items-center gap-5 w-full mt-10'>
                    <div>
                        <img src={Left} alt="" />
                    </div>
                    <div>
                        <img src={Main} alt="" />
                    </div>
                    <div>
                        <img src={Right} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-[68%] min-h-screen h-screen flex items-center justify-center'>
                <div className='w-[90%] h-[90%] b-shadow bg-gradient-to-b from-[#5f0202] to-[#270202] rounded-lg p-5 text-white overflow-y-scroll pb-10'>
                    <div className=' w-[90%] mx-auto'>
                        <h1 className='text-center pt-3'>Verify Email</h1>
                        <div className='mt-4 text-center'>
                            <p>To verify your email, we have sent you a One Time Password (OTP) to **********@gmail.com</p>
                        </div>

                        <div className='flex items-center gap-1 relative mt-5'>
                            <div className='gradient w-full h-[1px] mt-5'></div>
                            <p className='absolute top-[50%] translate-y-[-10%] left-[50%] translate-x-[-50%] bg-[#5f0202] px-2'>Or</p>
                            <div className='gradient w-full h-[1px] mt-5'></div>
                        </div>
                        <form className='grid grid-cols-2 gap-5 mt-10'>
                            <div className='col-span-2'>
                                <div className='w-full gradient h-[40px] p-[1px] rounded-lg'>
                                    <div className='w-full h-full bg-gradient-to-br from-[#720303] to-[#3a0202] rounded-lg flex items-center gap-2 px-2'>
                                        <input type="text" className='w-full h-full bg-transparent'/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-2 mt-5'>
                                <button className='gradient w-full rounded-lg py-3'>Verify</button>
                                <p className='mt-2 text-center text-xs'>By creating an account, you agree to the <Link to='/' className='underline'>Terms of Service</Link> and <Link to='/' className='underline'>Privacy Policy</Link></p>

                                <p className='mt-10 text-center text-sm cursor-pointer'>
                                    Resend OTP
                                </p>
                            </div>
                        </form>
                    </div>
                    
                </div>


            </div>
        </main>
    )
}

export default VerifyOtp
