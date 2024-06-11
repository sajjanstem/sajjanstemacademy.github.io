import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/exams">Exams</Link></li>
                    <li><Link to="/syllabus">Syllabus</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/contactus">Events</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
