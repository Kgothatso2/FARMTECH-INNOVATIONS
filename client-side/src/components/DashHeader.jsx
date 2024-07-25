import React, { useState } from 'react';
import '../styles/Header.css';
import usericon from '../assets/img/user-icon.webp';
import { Link } from "react-router-dom";


function Header() {
    const [showUserMenu, setShowUserMenu] = useState(false);

    const toggleUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    };

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/v1/users/logout', {
                method: 'GET',
                credentials: 'include',
            });

            if (response.ok) {
                window.location.href = '/';
            } else {
                console.error('Failed to logout');
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <header className="top">
            <a href='/'><h1>FARMTECH INNOVATIONS</h1></a>
            <nav className="nav-links">
                <a href="/dashboard#">Market Analysis</a>
                <a href="/dashboard#">Fields</a>
                <a href="/dashboard#">Reports</a>
            </nav>
            <div className="user-icon" onClick={toggleUserMenu}>
                <img src={usericon} alt="User Icon" />
                {showUserMenu && (
                    <div className="user-menu">
                        <a href="/dashboard#">Profile</a>
                        <a href="/dashboard#">Settings</a>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
