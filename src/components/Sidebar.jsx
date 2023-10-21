import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import '../styles/Sidebar.scss';
import { IconContext } from 'react-icons/lib';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{ color: 'white' }}>
                <nav className='nav-main-wrapper'>
                    <Link to="#" className='nav-main-wrapper--burger-icon'>
                        <FaBars onClick={showSidebar} />
                    </Link>
                </nav>
                <nav className={'sidebar-nav-menu ' + (sidebar ? 'is-open' : 'is-closed')}>
                    <div className='side-nav-menu-wrap'>
                        <Link to="#" className='nav-main-wrapper--burger-icon'>
                            <AiOutlineClose onClick={showSidebar} />
                        </Link>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />;
                        })}
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;