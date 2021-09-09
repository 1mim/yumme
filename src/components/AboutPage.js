import React from 'react'

const AboutPage = () => {
    return (
    <div className="pb-32">
             <div className="aboutImage">
                <img src="https://i.ibb.co/wBNMXCM/yumme-about-page.jpg" alt=""/>
             </div>
            <div className="aboutContent shadow-md">
            <h2 className="text-4xl">About</h2><br />
                <p className="text-xs font-sans">
                    Yumme is a food recipe blog created by 1mim for GA SEI 31
                    project 2.
                    
                    It fetches API from <a href="https://www.themealdb.com/api.php" className="font-bold text-red-450">themealdb</a> and
                    styled using <a href="https://tailwindcss.com/" className="font-bold text-red-450">tailwindcss</a>.
                    <br /><br />
                    Yumme is done using <span className="font-bold text-red-450">React</span>. It mainly utilises the <span className="italic">useState</span> and <span className="italic">useEffect</span> hooks as well
                    as passing down props with Route and Link.
                    <br /><br/>
                    It comprises of various components.
                    The <span className="italic">thumbnail/card</span> is a single component used extensively across yumme to display the data fetched from the API.
                    The <span className="italic">recipe detail page</span> is also a single component that gets data being passed down from the <span className="italic">thumbnail/card</span>.
                    <br /><br />
                    The <span className="italic">Search</span> page allows visitors to search for available recipes in the API.
                    <br /><br />
                    The <span className="italic">Latest</span> and <span className="italic">Featured</span> pages displays data on page load w useEffect.
                
                </p>
                </div>
        </div>
    )
}

export default AboutPage
