import React from 'react';
import Container from '../../components/Container';
import HeaderBack from '../../components/HeaderBack';
import { FaRegComment, FaHeart } from 'react-icons/fa';

const VotingPoll = () => {
    const pollOptions = [
        { name: 'DEADPOOL & WOLVERINE', percentage: 50 },
        { name: 'Spiderman', percentage: 30 },
        { name: 'Joker', percentage: 20 },
    ];

    const pollOptions2 = [
        { name: 'BATMAN', percentage: 50 },
        { name: 'DESPICABLE ME 4', percentage: 30 },
        { name: 'Joker', percentage: 20 },
    ];

    return (
        <Container>
            <HeaderBack heading={'Viewers night cinema voting poll'} text={'Vote to watch your favorite movies'} />
            <div className="mt-8 space-y-8">
                {[pollOptions, pollOptions2].map((options, index) => (
                    <div key={index} className="p-6 rounded-lg border-b border-gray-700">
                        <p className="text-center text-white mb-4">
                            Participate in <span className="font-semibold">Viewers night cinema voting poll</span> for a chance to watch your favorite movie!
                        </p>
                        <div className="space-y-4">
                            {options.map((option, idx) => (
                                <div key={idx} className="flex items-center border-2 pr-2 rounded-tr-xl rounded-tl-xl">
                                    <span className="text-white font-bold px-4 py-2 rounded-l-md gradient rounded-tl-xl" style={{width: `${option.percentage}%`}}>{option.name}</span>
                                    <div className="flex-1 h-8 relative rounded-r-md overflow-hidden">
                                    
                                    </div>
                                    <span className="ml-4 text-white font-semibold">{option.percentage}%</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-text text-sm mt-4">50 Votes. 3 days, 5 hours left</p>
                        <div className="flex items-center space-x-4 mt-2 text-white">
                            <span className="flex items-center space-x-1">
                                <FaRegComment /> <span>Comment</span>
                            </span>
                            <span className="flex items-center space-x-1">
                                <FaHeart className="text-red-500" /> <span>10</span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default VotingPoll;