import React from 'react'
import './navbar.css'
import logo from '../../assets/new-logo.png';
import { Link } from 'react-scroll';
import profile from '../../assets/profile.png';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src = {logo} alt="logo" id = "left_logo" className = 'logo'/>
            <div className="desktopMenu">

                <Link className = "desktopMenuListItem">Home</Link>
                <Link className = "desktopMenuListItem">Examples</Link>
                <Link className = "desktopMenuListItem">About Us</Link>
            </div>

            <img src = {profile} alt="logo" id = "right_logo" className = 'logo'/>
           
        </nav>
    )
}

export default Navbar;