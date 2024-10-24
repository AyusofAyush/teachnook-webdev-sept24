import React from 'react';

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;