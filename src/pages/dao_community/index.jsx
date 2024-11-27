import React from 'react';
import Container from '../../components/Container';
import HeaderBack from '../../components/HeaderBack';
import { FaRegCommentDots } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';
import { IoMdPhotos } from "react-icons/io";
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { MdVerified } from "react-icons/md";

import AdamImage from '../../assets/images/adam.png';
import JamesImage from '../../assets/images/james.png';
import JulietImage from '../../assets/images/juliet.png';
import MovieImage from '../../assets/images/movie-image.png';

const DAOCommunity = () => {
    return (
        <Container>
            <HeaderBack heading={'Community (DAO)'} />
            <div className="mt-8 space-y-6">
                <div className="flex space-x-4 overflow-x-scroll">
                    {[
                        { name: 'Adams', image: AdamImage },
                        { name: 'James', image: JamesImage },
                        { name: 'Juliet', image: JulietImage },
                        { name: 'Adam', image: AdamImage },
                        { name: 'James', image: JamesImage },
                        { name: 'Juliet', image: JulietImage },
                        { name: 'Adam', image: AdamImage },
                    ].map((user, idx) => (
                        <div key={idx} className="relative flex items-center gradient p-1 rounded-full min-w-[200px] scroll-bar-hide mb-2">
                            <div className="w-12 h-12 rounded-full border-2 border-red-500 overflow-hidden">
                                <img
                                    src={user.image}
                                    alt={`${user.name} profile`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-xs text-white rounded-full px-2">
                                {user.name} is Live
                            </div>
                        </div>
                    ))}
                </div>

                {/* Post Input Section */}
                <div className="flex items-center space-x-4 border-b p-3 rounded-lg">
                    <img
                        src={AdamImage}
                        alt="User avatar"
                        className="w-10 h-10 rounded-full"
                    />
                    <input
                        type="text"
                        placeholder="What's on your mind?"
                        className="flex-1 p-2 rounded-md outline-none"
                    />
                    <div className='flex flex-col items-center'>
                        <IoMdPhotos className="cursor-pointer text-2xl" />
                        <small>Photo</small>
                    </div>
                </div>

                <div className="p-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                        <img
                            src={AdamImage}
                            alt="Poster avatar"
                            className="w-8 h-8 rounded-full"
                        />
                        <div>
                            <p className="text-white font-semibold flex items-center gap-1">Isaac <MdVerified className='text-[#00A3FF]' /></p>
                            <span className="text-gray-400 text-xs">2hrs</span>
                        </div>
                    </div>
                    <p className="text-text mb-2">Movie crew were amazing</p>
                    <div className="relative">
                        <img
                            src={MovieImage}
                            alt="Post content"
                            className="w-full rounded-xl"
                        />
                    </div>
                    <div className="flex justify-between mt-3 text-gray-400 text-sm bg-white py-3 px-2 rounded-md border-2 border-dashed">
                        <div className="flex items-center space-x-1 cursor-pointer">
                            <BiCommentDetail />
                            <span>Scripts</span>
                        </div>
                        <div className="flex items-center space-x-1 cursor-pointer">
                            <FaRegCommentDots />
                            <span>Comment</span>
                        </div>
                        <div className="flex items-center space-x-1 cursor-pointer">
                            <RiQuestionAnswerLine />
                            <span>Q & A</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default DAOCommunity;
