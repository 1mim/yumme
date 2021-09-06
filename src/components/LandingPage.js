import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {


    return (
        <div className="bg-cover bg-center h-screen grid grid-cols-2 gap-4" style={{backgroundImage:`url('https://i.ibb.co/52Rzytn/yumme-landingpage-banner2.jpg')`}}>
        
            <div className="my-auto">
                <h2 className="text-6xl pt-10 pb-5">Welcome to yumme.</h2>
                <h5 className="text-xl">Explore our yumme collection of recipes.</h5>
                <h5 className="text-xl">yumme meals, made by you.</h5>


                <Link to='/search'><button className="w-1/3 h-14 m-7 font-bold bg-transparent border-2 border-gray-600 focus-within:text-gray-600 outline-none hover:bg-gray-600 hover:text-white"
                >Discover now</button></Link>
            </div>

        <div></div>
            
        </div>
    )
}

export default LandingPage
