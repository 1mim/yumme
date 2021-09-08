import React from 'react';
import LandingPage from './LandingPage';
import Featured from './Featured';
import Category from './Category';

const Homepage = () => {
    return (
        <div>
            <LandingPage />
            <Featured />
            <div className="bg-gray-600 w-full h-full pt-10 pb-10"
            style={{backgroundImage:`url('https://i.ibb.co/Zgj3KQh/sign-up-news-letter-banner.jpg')`}}><Category /></div>
        </div>
    )
}

export default Homepage
