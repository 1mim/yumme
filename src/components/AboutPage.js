import React from 'react'

const AboutPage = () => {
    return (
        <div className="grid grid-cols-2 grid-flow-col flex-wrap mx-10 space-x-0 content-center">
            <div className="mt-16 pl-10 text-right">
                <img className="h-3/4" src="https://i.ibb.co/wBNMXCM/yumme-about-page.jpg" alt=""/>
            </div>
            <div className="text-left mt-32">
            <h2 className="text-5xl">About</h2><br />
                <p className="text-sm font-sans pr-24">
                    Yumme is a food recipe blog created by 1mim for GA SEI 31
                    project 2. <br/>
                    
                    It fetches API from <a href="https://www.themealdb.com/api.php">https://www.themealdb.com/api.php</a>
                    and styled using <a href="https://tailwindcss.com/">https://tailwindcss.com/</a>
                </p>
                </div>
        </div>
    )
}

export default AboutPage
