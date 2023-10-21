import React from 'react';
import { IconContext } from 'react-icons/lib';
import { IoIosConstruct } from 'react-icons/io';
import '../styles/MockPage.scss'

const Login = () => {
    return (
        <IconContext.Provider value={{ color: 'purple' }}>
            <div className='mock-page'>
                <IoIosConstruct size={50} />
                <h1>Log in Page</h1>
                <IoIosConstruct size={50} />
            </div>
        </IconContext.Provider>
    );
};

export default Login;