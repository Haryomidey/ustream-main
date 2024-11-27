import React from 'react';
import ImageOne from '../../assets/images/Frame 19013.png';
import ImageTwo from '../../assets/images/Frame 19014.png';
import ImageThree from '../../assets/images/Frame 19015.png';
import ImageFour from '../../assets/images/Frame 19016.png';
import ImageFive from '../../assets/images/Frame 19017.png';
import ImageSix from '../../assets/images/Frame 19018.png';
import ImageSeven from '../../assets/images/Frame 19019.png';
import ImageEight from '../../assets/images/Frame 19020.png';
import ImageNine from '../../assets/images/Frame 19021.png';
import Container from '../../components/Container';
import { FaSearch } from "react-icons/fa";

const Category = () => {
    return (
        <Container>
            <div className='relative'>
                <h1 className='text-center font-bold text-2xl mt-6'>Select 5 of your favorite Categories</h1>
                <div className='flex items-center gap-2 bg-white rounded-md h-[55px] mt-6 text-black px-2'>
                    <FaSearch className='text-xl' />
                    <input type="text" className='w-[90%]' placeholder='Search for your favorite categories' />
                </div>
                <div className='grid grid-cols-3 gap-10 mt-10 pb-10'>
                    {Content.map(content => (
                        <div>
                            <img src={content.image} alt="" className='w-full object-cover' />
                            <p className='text-center mt-2'>{content.type}</p>
                        </div>
                    ))}
                </div>
                <div className=''>
                    <button className='gradient w-full rounded-lg py-3'>Done</button>
                </div>
            </div>
        </Container>
    )
}

export default Category

const Content = [
    {
        id: 1,
        image: ImageOne,
        type: 'Action'
    },
    {
        id: 2,
        image: ImageTwo,
        type: 'Romance'
    },
    {
        id: 3,
        image: ImageThree,
        type: 'Sci-Fi'
    },
    {
        id: 4,
        image: ImageFour,
        type: 'Fantasy'
    },
    {
        id: 5,
        image: ImageFive,
        type: 'Triller'
    },
    {
        id: 6,
        image: ImageSix,
        type: 'Comedy'
    },
    {
        id: 7,
        image: ImageSeven,
        type: 'Animations'
    },
    {
        id: 8,
        image: ImageEight,
        type: ''
    },
    {
        id: 9,
        image: ImageNine,
        type: ''
    },
]