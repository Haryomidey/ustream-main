import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const HeaderBack = ({heading, text}) => {
    return (
        <div className='w-full flex items-center gap-5 px-5 sm:px-20 pt-10'>
            <p className='cursor-pointer h-[30px] w-[30px] hover:bg-[#302e2e] grid place-items-center rounded-full transition-all ease duration-300'><IoIosArrowBack /></p>
            <div className='w-full flex flex-col items-center'>
                <h2 className='text-3xl font-semibold'>{heading}</h2>
                <p className='text-text text-sm'>{text}</p>
            </div>
        </div>
    )
}

export default HeaderBack
