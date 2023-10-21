import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import appLogo from '../assets/learnify-logo.svg';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
            <Navbar />
            <Link to='/home'>
                <img src={appLogo} alt="The application logo" />
            </Link>
            <p className='header__logo-text'>LEARNIFY</p>
            <div className="header__title-container">
                <h1>Learn in-demand skills.</h1>
                <p>The most efficient way for you to learn in-demand skills and advance your career.</p>
                <a href="#plans" className="header__button">JOIN LEARNIFY <span></span></a>
            </div>
        </header>
    );
};

export default Header;
