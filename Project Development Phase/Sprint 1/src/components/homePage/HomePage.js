import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';

const HomePage = () => {
    return (
        <div className='homeContainer'>
            <Link to="/login"><button className='homeLoginBtn'>Login</button></Link>
            <Link to="/register"><button className='homeRegisterBtn'>Register</button></Link>
        </div>
    );
};

export default HomePage;