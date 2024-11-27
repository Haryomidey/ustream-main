import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Container from '../../components/Container';
import HeaderBack from '../../components/HeaderBack';
import Button from '../../components/Button';

const CinemaNight = () => {
    const categories = [
        'Animation',
        'Romance',
        'Action',
        'Kids',
        'Comedy',
        'Thriller',
        'Horror',
        'Sci-Fi',
        'Fantasy',
    ];

  return (
    <Container>
        <HeaderBack heading={'Thursday Night Cinema'} text={'Pick a category and stream endless movies on TNC'} />
        <div className="mt-6 rounded-lg p-4">
            <div className='mb-4'>
                {categories.map((category, index) => (
                    <div key={index} className="flex justify-between items-center p-4 text-white hover:bg-gray-800 rounded cursor-pointer">
                        <span>{category}</span>
                        <FaChevronRight className="text-gray-400" />
                    </div>
                ))}
            </div>
            <Button background={'yes'}>Viewers night cinema voting poll</Button>
        </div>
    </Container>
  );
};

export default CinemaNight;
