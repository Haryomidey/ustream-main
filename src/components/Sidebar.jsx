import Home from '../assets/images/home.png';
import Earnings from '../assets/images/earning.png';
import TN_Cinema from '../assets/images/tn_cinema.png';
import Community from '../assets/images/community.png';
import About_us from '../assets/images/about_us.png';
import Our_team from '../assets/images/our_team.png';
import Ustream_academy from '../assets/images/ustream_academy.png';
import Profile from '../assets/images/profile.png';

import Button from '../components/Button';

const Sidebar = ({ isOpen }) => {
    return (
        <div className={`fixed top-[100px] left-0 h-screen w-full bg-black text-white p-6 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
            <ul className="space-y-2 pb-5">
                {Content.map((item) => (
                    <li key={item.id} className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                        <img src={item.icon} alt={item.name} className="w-5 h-5" />
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
            {isOpen && <Button background={'yes'}>Log out</Button>}
        </div>
    );
};

export default Sidebar

const Content = [
    {
        id: 1,
        name: "Home",
        icon: Home,
    },
    {
        id: 2,
        name: "Earnings",
        icon: Earnings,
    },
    {
        id: 3,
        name: "TN Cinema",
        icon: TN_Cinema
    },
    {
        id: 4,
        name: "Community",
        icon: Community
    },
    {
        id: 5,
        name: "About us",
        icon: About_us
    },
    {
        id: 6,
        name: "Our Team",
        icon: Our_team
    },
    {
        id: 7,
        name: "Ustream Academy",
        icon: Ustream_academy
    },
    {
        id: 8,
        name: "Profile",
        icon: Profile
    }
]