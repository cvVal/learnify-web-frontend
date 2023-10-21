import React from 'react';
import Course from '../components/Course';
import useGetCourses from '../hooks/useGetCourses';

const CoursesList = () => {
    const {courses, totalRatings } = useGetCourses();

    return (
        <section>
            {
                courses.map(it => (
                    <Course course={it} ratings={totalRatings[it.id]} user={it.userData} key={it.id} />
                ))
            }
        </section>
    );
};

export default CoursesList;