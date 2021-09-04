import React from 'react';


const Navbar = () => {
    return (
        <>
        <header className='navbar'>
            <nav>
            <ul>
            
                <li><h6>Latest</h6></li>
                <li><h6>Featured</h6></li>
        
                <li><h2>yumme.</h2></li>
                
                <li><h6>Categories</h6></li>
                <li><h6>About</h6></li>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-2" fill="none" viewBox="0 0 23 23" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
                    </ul>
                   
                </nav>
        </header>
        </>
    )
}

export default Navbar
