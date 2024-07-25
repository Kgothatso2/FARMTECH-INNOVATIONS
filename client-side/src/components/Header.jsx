import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/css/style.css";
import "../styles/css/bootstrap.min.css";
import '../styles/Header.css';

function Header() {
    return (
        <header class="top">
            <Link to={'/'}><h1>FARMTECH INNOVATIONS</h1></Link>
            <nav className="nav-links">
                <a href="#about">About Us</a>
                <a href="#offers">Offers</a>
                <a href="#us">Why Us?</a>
                <a href="#contact">Contact Us</a>
            </nav>
            <div className='l-r'>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}><button id='sign-up'>Sign Up</button></Link>
            </div>
        </header>
    );
}

export default Header