import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import Discord from '../assets/images/discord.svg';
import Telegram from '../assets/images/telegram.svg';
import Twitter from '../assets/images/twitter.svg';

const Footer = () => {
    return (
        <footer className="bg-[#4A0000] text-white py-12 max-w-screen px-5">
            <div className="container mx-auto">
                <div className="flex items-center justify-between flex-wrap gap-8">

                    <div>
                        <h2 className="text-5xl font-bold mb-6">Stream & Earn</h2>
                        <img src={Logo} />
                    </div>

                    <div>
                        <ul className='flex items-center gap-4 mb-3 text-sm'>
                            <li className='underline text-[#dddddd]'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='underline text-[#dddddd]'>
                                <Link to='/'>Stream</Link>
                            </li>
                            <li className='underline text-[#dddddd]'>
                                <Link to='/'>Earn</Link>
                            </li>
                            <li className='underline text-[#dddddd]'>
                                <Link to='/'>Blog</Link>
                            </li>
                            <li className='underline text-[#dddddd]'>
                                <Link to='/'>DAO</Link>
                            </li>
                        </ul>
                        <ul className='flex items-center gap-3 justify-end'>
                            <li className='gradient w-[60px] h-[60px] rounded-full p-[1px] cursor-pointer'>
                                <p className='bg-[#4A0000] w-full h-full rounded-full grid place-items-center'>
                                    <img src={Discord} alt="" />
                                </p>
                            </li>
                            <li className='gradient w-[60px] h-[60px] rounded-full p-[1px] cursor-pointer'>
                                <p className='bg-[#4A0000] w-full h-full rounded-full grid place-items-center'>
                                    <img src={Telegram} alt="" />
                                </p>
                            </li>
                            <li className='gradient w-[60px] h-[60px] rounded-full p-[1px] cursor-pointer'>
                                <p className='bg-[#4A0000] w-full h-full rounded-full grid place-items-center'>
                                    <img src={Twitter} alt="" />
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-6">
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                            <Link to="/terms" className="text-gray-400 hover:text-white text-xs">Terms of Service</Link>
                            <Link to="/privacy" className="text-gray-400 hover:text-white text-xs">Privacy Policy</Link>
                        </div>
                        <p className="text-xs text-gray-500">© {new Date().getFullYear()} All Rights Reserved, Ustream.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
