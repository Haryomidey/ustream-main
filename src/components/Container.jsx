import React from 'react'

const Container = ({children, className}) => {
    return (
        <div className='w-full h-full min-h-screen bg-black'>
            <div className={`${className} max-w-[800px] mx-auto h-full min-h-screen text-white backdrop-blur-lg bg-[#0f0f0f] p-5`}>
                {children}
            </div>
        </div>
    )
}

export default Container
