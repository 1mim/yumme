import React from 'react';
import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <>
        <header className='navbar'>
            <nav>
            <ul>
            
                <li><Link to='/latest' className="hover:text-red-550"><h6>Latest</h6></Link></li>
                <li><Link to='/featured' className="hover:text-red-550"><h6>Featured</h6></Link></li>
        
                <li><Link to='/'><h2>yumme.</h2></Link></li>
                
                <li><Link to='/category' className="hover:text-red-550"><h6>Categories</h6></Link></li>
                <li><Link to='/about' className="hover:text-red-550"><h6>About</h6></Link></li>
                <Link to='/search' className="hover:text-red-550"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-2" fill="none" viewBox="0 0 23 23" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg></Link>
                    </ul>
                   
                </nav>
        </header>
        </>
    )
}

export default Navbar
