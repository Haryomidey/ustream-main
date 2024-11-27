import React from 'react'

const Button = ({children, background, className}) => {
    return (
        <div className='gradient p-[2px] rounded-full'>
            <button className={`${className} ${background ? 'button' : 'bg-[#080204]'} text-white rounded-full px-8 py-2 w-full`}>
                {children}
            </button>
        </div>
    )
}

export default Button
