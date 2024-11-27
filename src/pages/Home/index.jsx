import React from 'react'
import Header from '../../components/Header';
import BackgroundImage from '../../assets/images/hero.svg';

import HeroSection from './HeroSection';
import SecondSection from './SecondSection';
import WhatUserSays from './WhatUserSays';
import Plan from './Plan';
import KnowMore from './KnowMore';
import Footer from '../../components/Footer';

const Home = () => {

    const style={
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    return (
        <div style={style} className='min-h-screen h-screen max-h-[700px]'>
            <Header />
            <HeroSection />
            <SecondSection />
            <WhatUserSays />
            <Plan />
            <KnowMore />
            <Footer />
        </div>
    )
}

export default Home;