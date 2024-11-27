import React from 'react';
import { FaPlay, FaCalendar, FaUser  } from 'react-icons/fa';
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RxLapTimer } from "react-icons/rx";

const MovieCard = ({ movie, isFavorite, toggleFavorite }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <IoMdStar key={i} className={`text-yellow-400 ${i < movie.rating ? 'opacity-100' : 'opacity-50'}`} />
            );
        }
        return stars;
    };

    return (
        <div className="rounded-lg overflow-hidden shadow-lg">
            <div className='relative rounded-md overflow-hidden bg-white p-[2px]'>
                <img src={movie.imageUrl} alt={movie.title} className="w-full h-48 object-cover rounded-md" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                    <FaPlay className="text-white text-4xl" />
                </div>
                <div className="absolute top-2 right-2 z-10">
                    <button onClick={toggleFavorite}>
                        {isFavorite ? (
                            <AiFillHeart className="text-red-500 text-2xl" />
                        ) : (
                            <AiOutlineHeart className="text-white text-2xl" />
                        )}
                    </button>
                </div>
            </div>
            <div className="p-4 flex items-start rounded-md border border-dashed mt-3 bg-white text-gray-400">
                <div>
                    <h3 className="text-lg font-semibold text-black">{movie.title}</h3>
                    <div className="flex items-center text-sm">
                        {renderStars()}
                    </div>
                    <p className="">{movie.description}</p>
                    <div className='mt-3 text-sm flex flex-col gap-2'>
                        <p className='flex items-center gap-2'><FaCalendar /> July, 2024</p>
                        <p className='flex items-center gap-2'><RxLapTimer /> {movie.duration}</p>
                        <p className='flex items-center gap-2'><FaUser /> {movie.category}</p>
                    </div>
                    <div className='flex items-center gap-3 flex-wrap mt-3 text-xs'>
                        <p className='border p-2 rounded-lg'>Action</p>
                        <p className='border p-2 rounded-lg'>Comedy</p>
                    </div>
                </div>
                <button className=" text-red-500">
                    <MdOutlineFileDownload className="text-3xl" />
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
