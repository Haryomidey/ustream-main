import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { RiMenuFold3Line, RiMenuUnfold3Line } from "react-icons/ri";

import Logo from '../assets/images/logo.svg';
import Button from './Button';

const Header = () => {
    const [isNavbar, setIsNavbar] = useState(false);
    const navRef = useRef();

    useEffect(() => {
        const outsideMenuClick = (e) => {
            if (navRef.current && navRef.current.contains(e.target)) {
                setIsNavbar(true);
            } else {
                setIsNavbar(false);
            }
        };

        document.addEventListener('mousedown', outsideMenuClick);

        return () => {
            document.removeEventListener('mousedown', outsideMenuClick);
        };
    }, []);

    return (
        <header className='w-full h-[100px] fixed left-0 top-0 right-0 shadow-md backdrop-blur-md z-[1111]'>
            <div className='w-full h-full px-5 sm:px-20 flex items-center justify-between'>
                <Link to='/'>
                    <div className='w-[80px] sm:w-[100px] font-bold text-center'>
                        <img
                            src={Logo}
                            className='w-[100px]'
                            alt='logo'
                        />
                    </div>
                </Link>
                <div className='gradient rounded-full p-[2px]'>
                    <ul className='hidden lg:flex items-center gap-10 bg-[#220a0b] text-white py-6 px-10 rounded-[150px] shadow-md'>
                        <li className={`ease transition-colors duration-300`}>
                            <NavLink to='/'>Stream</NavLink>
                        </li>
                        <li className={` ease transition-colors duration-300`}>
                            <NavLink to='/earn'>Earn</NavLink>
                        </li>
                        <li className={`ease transition-colors duration-300`}>
                            <NavLink to='/blog'>Blog</NavLink>
                        </li>
                        <li className={`ease transition-colors duration-300`}>
                            <NavLink to='/dao'>DAO</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-4'>
                    <Link to='/login' className='hidden lg:block'>
                        <Button>Login</Button>
                    </Link>
                    <Link to='/register' className='hidden lg:block'>
                        <Button background={'yes'}>Sign up</Button>
                    </Link>
                </div>
                <div className='block lg:hidden text-2xl'>
                    {isNavbar ?
                        <RiMenuFold3Line className='cursor-pointer' onClick={() => setIsNavbar(false)} />
                        :
                        <RiMenuUnfold3Line className='cursor-pointer' onClick={() => setIsNavbar(true)} />
                    }
                </div>
            </div>

            {/* Responsive view */}
            <div className={`w-full h-screen fixed top-0 bottom-0 bg-[#4a00007e] ${!isNavbar ? 'invisible' : 'visible'} transition-[visibility]`}>
                <ul ref={navRef} className={`h-full w-[60%] sm:w-[30%] flex flex-col gap-10 bg-white pt-16 px-5 ${!isNavbar ? "ml-[-100%]" : "ml-[0]"} transition-[margin] duration-300 ease`}>
                    <li className={`hover:text-primary ease transition-colors duration-300`}>
                        <NavLink to='/'>HOME</NavLink>
                    </li>
                    <li className={`hover:text-primary ease transition-colors duration-300`}>
                        <NavLink to='/events'>EVENTS</NavLink>
                    </li>
                    <li className={`hover:text-primary ease transition-colors duration-300`}>
                        <NavLink to='/about'>ABOUT</NavLink>
                    </li>
                    <li className={`hover:text-primary ease transition-colors duration-300`}>
                        <NavLink to='/contact'>CONTACT US</NavLink>
                    </li>
                    <li className='w-[fit-content]'>
                        <Link to='/dashboard' className='block lg:hidden button'>Create an event</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;