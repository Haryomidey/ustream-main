import React from 'react'
import Logo from '../../assets/images/logo.svg';
import Left from '../../assets/images/auth-half-left.svg';
import Main from '../../assets/images/auth-main.svg';
import Right from '../../assets/images/auth-half-right.svg';
import Google from '../../assets/images/google.svg';
import Metamask from '../../assets/images/metamask-icon.svg';
import Email from '../../assets/images/email.svg';

import { FaUser, FaEye } from "react-icons/fa";
import { PiUserCircleFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Login = () => {
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
                        <h1 className='text-center pt-3'>Login With:</h1>
                        <div className='grid grid-cols-3 mt-4 gap-3'>
                            <div className='gradient p-[1px] h-[55px] rounded-lg'>
                                <div className='h-full w-full bg-gradient-to-br from-[#c60505] to-[#240000] rounded-lg flex items-center justify-center gap-2'>
                                    <img src={Google} alt="" />
                                    <p>Google</p>
                                </div>
                            </div>
                            <div className='gradient p-[1px] h-[55px] rounded-lg'>
                                <div className='h-full w-full bg-gradient-to-br from-[#c60505] to-[#240000] rounded-lg flex items-center justify-center gap-2'>
                                    <img src={Metamask} alt="" />
                                    <p>Metamask</p>
                                </div>
                            </div>
                            <div className='gradient p-[1px] h-[55px] rounded-lg'>
                                <div className='h-full w-full bg-gradient-to-br from-[#c60505] to-[#240000] rounded-lg flex items-center justify-center gap-2'>
                                    <img src={Email} alt="" />
                                    <p>Email</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center gap-1 relative mt-5'>
                            <div className='gradient w-full h-[1px] mt-5'></div>
                            <p className='absolute top-[50%] translate-y-[-10%] left-[50%] translate-x-[-50%] bg-[#5f0202] px-2'>Or</p>
                            <div className='gradient w-full h-[1px] mt-5'></div>
                        </div>
                        <form className='grid grid-cols-2 gap-5 mt-10'>
                            <div className='col-span-2'>
                                <label className='text-xs'>Email</label>
                                <div className='w-full gradient h-[40px] p-[1px] rounded-lg'>
                                    <div className='w-full h-full bg-gradient-to-br from-[#720303] to-[#3a0202] rounded-lg flex items-center gap-2 px-2'>
                                        <MdEmail className='text-xl' />
                                        <input type="email" className='w-full h-full bg-transparent' placeholder='Email' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <label className='text-xs'>Password</label>
                                <div className='w-full gradient h-[40px] p-[1px] rounded-lg'>
                                    <div className='w-full h-full bg-gradient-to-br from-[#720303] to-[#3a0202] rounded-lg flex items-center justify-between gap-2 px-2'>
                                        <div className='flex items-center gap-2 w-[90%]'>
                                            <AiFillLock className='text-xl' />
                                            <input type="password" className='w-full h-full bg-transparent' placeholder='Password' />
                                        </div>
                                        <FaEye className='cursor-pointer' />
                                    </div>
                                    <small>Minimum length is 8 characters.</small>
                                </div>
                            </div>
                            <div className='col-span-2 mt-5'>
                                <button className='gradient w-full rounded-lg py-3'>Login</button>
                                <p className='mt-2 text-center text-xs'>By creating an account, you agree to the <Link to='/' className='underline'>Terms of Service</Link> and <Link to='/' className='underline'>Privacy Policy</Link></p>

                                <p className='mt-10 text-center text-sm'>
                                    <span>Don't have an account yet?</span> <Link to='/register' className='font-semibold gradient-text'>Log in</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    
                </div>


            </div>
        </main>
    )
}

export default Login
