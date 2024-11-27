import React from 'react';
import HeaderBack from '../../components/HeaderBack';
import Container from '../../components/Container';

import { FaUser, FaUniversity, FaWallet, FaCreditCard, FaLink, FaBell } from 'react-icons/fa';

const Profile = () => {
    return (
        <Container>
            <HeaderBack heading={'Profile'} text={'Have access to your informations'} />

            <div className="mt-6 space-y-4 text-white">
                <div className="flex items-center space-x-4">
                    <FaUser className="w-10 h-10 rounded-full bg-gray-600 p-2" />
                    <span className="font-semibold">Profile</span>
                </div>

                <div className="space-y-6 mt-6 text-gray-300">
                    <MenuItem icon={<FaUniversity />} label="Enroll" />
                    <MenuItem icon={<FaWallet />} label="Withdraw" />
                    <MenuItem icon={<FaCreditCard />} label="Add card" />
                    <MenuItem icon={<FaLink />} label="Link crypto account" />
                    <MenuItem icon={<FaBell />} label="Notifications" />
                </div>
            </div>
        </Container>
    );
};

const MenuItem = ({ icon, label }) => (
    <div className="flex items-center justify-between cursor-pointer p-3 rounded-lg transition-all duration-200 hover:bg-gray-800 hover:text-white">
        <div className="flex items-center space-x-3">
            <span className="text-xl">{icon}</span>
            <span>{label}</span>
        </div>
        <span className="text-gray-500">{'>'}</span>
    </div>
);

export default Profile;
