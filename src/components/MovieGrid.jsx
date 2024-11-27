import React from 'react';
import MovieCard from './MovieCard';

import Image1 from '../assets/images/image-1.jpg';
import Image2 from '../assets/images/image-2.jpg';
import Image3 from '../assets/images/image-3.jpg';
import Image4 from '../assets/images/image-4.jpg';
import Image5 from '../assets/images/image-5.jpg';
import Image6 from '../assets/images/image-6.jpg';
import Image7 from '../assets/images/image-7.jpg';
import Image8 from '../assets/images/image-8.jpg';
import Image9 from '../assets/images/image-9.jpg';

const MovieGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;

const movies = [
  {
    title: 'Deadpool & Wolverine',
    description: 'An epic crossover of two of Marvel\'s most iconic characters in a battle against evil.',
    imageUrl: Image1,
    rating: 4.5,
    duration: '2h 15m',
    category: 'Marvel Studios',
  },
  {
    title: 'The Platform 2',
    description: 'A chilling continuation of the dystopian tale that questions human morality.',
    imageUrl: Image2,
    rating: 4.0,
    duration: '1h 50m',
    category: 'Thriller',
  },
  {
    title: 'Guardians of the Galaxy Vol. 3',
    description: 'The Guardians embark on a mission to protect the galaxy from a new threat.',
    imageUrl: Image3,
    rating: 4.7,
    duration: '2h 10m',
    category: 'Marvel Studios',
  },
  {
    title: 'Batman: The Dark Knight Returns',
    description: 'An aging Batman returns to save Gotham from crime and chaos once again.',
    imageUrl: Image4,
    rating: 4.8,
    duration: '2h 30m',
    category: 'DC',
  },
  {
    title: 'Aquaman: Rise of Atlantis',
    description: 'Aquaman battles to save Atlantis from a looming underwater threat.',
    imageUrl: Image5,
    rating: 4.4,
    duration: '2h 5m',
    category: 'DC',
  },
  {
    title: 'Spider-Man: No Way Home',
    description: 'Spider-Man teams up with familiar faces to save the multiverse from chaos.',
    imageUrl: Image6,
    rating: 4.6,
    duration: '2h 28m',
    category: 'Marvel Studios',
  },
  {
    title: 'Wonder Woman: Bloodlines',
    description: 'Wonder Woman faces a powerful enemy while uncovering her origins.',
    imageUrl: Image7,
    rating: 4.3,
    duration: '2h 15m',
    category: 'DC',
  },
  {
    title: 'The Matrix Resurrections',
    description: 'Neo returns to the Matrix to confront new challenges and rediscover his past.',
    imageUrl: Image8,
    rating: 4.1,
    duration: '2h 28m',
    category: 'Sci-Fi',
  },
  {
    title: 'Black Widow: Red Guardian',
    description: 'Natasha Romanoff teams up with the Red Guardian to confront her dark past.',
    imageUrl: Image9,
    rating: 4.2,
    duration: '2h 10m',
    category: 'Marvel Studios',
  },
];
