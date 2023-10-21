import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { MdOutlineLogin } from 'react-icons/md';
import { RiUserSmileLine } from 'react-icons/ri';
import { BiSearchAlt2 } from 'react-icons/bi';
import '../styles/Navbar.scss'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const categories = "Categories";
    const categoriesLink = "/courses";
    const logIn = "Log in";
    const logInLink = "/login";
    const signUp = "Sign up";
    const signUpLink = "/signup";

    return (
        <>
            <IconContext.Provider value={{ color: 'white' }}>
                <nav className='navbar'>
                    <div className='navbar-container container'>
                        <div
                            className='menu-icon'
                            onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className='nav-item'>
                                <NavLink to={categoriesLink}
                                    className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}
                                    onClick={closeMobileMenu}
                                >
                                    <HiOutlineDesktopComputer />
                                    <p className='nav-item--text'>{categories}</p>
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to={logInLink}
                                    className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}
                                    onClick={closeMobileMenu}
                                >
                                    <MdOutlineLogin />
                                    <p className='nav-item--text'>{logIn}</p>
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to={signUpLink}
                                    className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}
                                    onClick={closeMobileMenu}
                                >
                                    <RiUserSmileLine />
                                    <p className='nav-item--text'>{signUp}</p>
                                </NavLink>
                            </li>
                        </ul>
                        <section className="main-input">
                            <div className="main-input-container">
                                <BiSearchAlt2 className="search-icon" />
                                <input type="text" placeholder='What do you want to learn today?' />
                                <span className='end-space'/>
                            </div>
                        </section>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;