import React from 'react'
import Container from '../../components/Container'

import { CiSearch } from "react-icons/ci";
import { MdSmartDisplay, MdFavorite } from "react-icons/md";
import { LuDownload } from "react-icons/lu";

import Image from '../../assets/images/batman.png';

const Movie = () => {
    return (
        <Container>
            <div className='w-full h-screen px-5 sm:px-20 '>
                <div className='flex items-center justify-between w-full'>
                    <div className='w-fit rounded-full py-1 px-2 flex items-center gap-1 bg-[#303030] h-[50px]'>
                        <CiSearch className='text-2xl' />
                        <input type="text" className='w-full bg-transparent' placeholder='Search'/>
                    </div>
                    <div className='flex gap-2'>
                        <MdSmartDisplay className='text-2xl'/>
                        <p className='text-sm'>00:59</p>
                    </div>
                </div>
                <div className='w-full h-[85%] mt-5 relative flex items-center justify-center'>
                    <div className='h-full'>
                        <img src={Image} alt="" className=' h-full' />
                    </div>
                    <div className='absolute right-3 bottom-[50%] text-2xl flex flex-col gap-2'>
                        <MdFavorite className='text-[#FF4D4F] cursor-pointer'/>
                        <LuDownload className='text-[#007BFF] cursor-pointer' />
                    </div>
                    <h2 className='text-4xl absolute bottom-5 left-[50%] translate-x-[-50%] font-semibold'>BATMAN</h2>
                </div>
            </div>
        </Container>
    )
}

export default Movie