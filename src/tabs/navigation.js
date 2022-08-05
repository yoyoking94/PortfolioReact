import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../css/nav.css';

const Navigation = () => {
    return (
        <div>
            <nav className='nav'>
                <ul className='listTab'>
                    <li><Link className="Links" to="/">Home</Link></li>
                    <li><Link className="Links" to="/Experience">Experience</Link></li>
                    <li><Link className="Links" to="/Education">Education</Link></li>
                    <li><Link className="Links" to="/Skills">Skills</Link></li>
                    <li><Link className="Links" to="/Divers">Divers</Link></li>
                    <li><Link className="Links" to="/Contact">Contact</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Navigation;