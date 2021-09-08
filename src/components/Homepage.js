import React from 'react';
import LandingPage from './LandingPage';
import Featured from './Featured';
import Category from './Category';

const Homepage = () => {
    return (
        <div>
             {/* <LandingPage />
            <Featured />  */}
            <div className="h-48 my-auto p-6"><Category /></div>
            {/* <p>placeholder: sign up to our newsletter</p>
            <p>browse by categories</p> */}
        </div>
    )
}

export default Homepage
