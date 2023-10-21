import React from 'react';
import CoursesList from '../containers/CoursesList';
import ProductPlans from '../components/ProductPlans';
import '../styles/CoursesPage.scss'
import '../styles/ProductPlans.scss';

const Courses = () => {
    return (
        <>
            <div className='main-courses-page-container'>
                <CoursesList />
            </div>
            <ProductPlans />
        </>
    );
};

export default Courses;