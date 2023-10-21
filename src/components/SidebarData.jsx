import { FaBeer } from 'react-icons/fa';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Categories',
        path: '#',
        icon: <FaBeer />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
        subNav: [
            {
                title: 'Backend development',
                path: '/courses/category/backend',
                icon: <FaBeer />,
            },
            {
                title: 'Frontend development',
                path: '/courses/category/web',
                icon: <FaBeer />,
            },
            {
                title: 'Marketing',
                path: '/courses/category/marketing',
                icon: <FaBeer />,
            },
            {
                title: 'Data Science',
                path: '/courses/category/data-science',
                icon: <FaBeer />,
            },
            {
                title: 'Mobile development',
                path: '/courses/category/mobile',
                icon: <FaBeer />,
            },
        ]
    },
    {
        title: 'Log in',
        path: '/login',
        icon: <FaBeer />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
    },
    {
        title: 'Sign up',
        path: '/signup',
        icon: <FaBeer />,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
    },
]