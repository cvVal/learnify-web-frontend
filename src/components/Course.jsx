import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import mockImage from '../assets/img/pexels-christina-morillo-small.jpg';
import digitalMarketing from '../assets/img/diggity-marketing-SB0WARG16HI-unsplash-small.jpg'
import mLearning from '../assets/img/markus-spiske-iar-afB0QQw-unsplash.jpg'
import mobile from '../assets/img/caspar-camille-rubin-89xuP-XmyrA-unsplash.jpg'
import react from '../assets/img/lautaro-andreani-xkBaqlcqeb4-unsplash.jpg'
import webDevelopment from '../assets/img/pexels-pixabay-39284-small.jpg'

const Course = ({ course, ratings, user }) => {
    const fullStars = Math.floor(ratings);
    const hasHalfStar = ratings - fullStars >= 0.5;
    const maxStars = 5;
    const courseImages = {
        "Mastering Digital Marketing": digitalMarketing,
        "Mastering Machine Learning": mLearning,
        "Mobile App Development with Flutter and Dart": mobile,
        "Front-End Web Development with React and TypeScript": react,
        "Full-Stack Web Development with React, Node.js, and MongoDB": webDevelopment,
    };
    const courseImage = courseImages[course.title] || mockImage;

    return (
        <div className='course-container-item'>
            <figure className='course-container-item--image'>
                <img src={course.imageUrl} alt={course.title} />
            </figure>
            <div className="course-container-item--info">
                <h3>{course.title}</h3>
                <div className="course-container-item--info--rating">
                    <p>{ratings > 0 ? ratings.toFixed(1) : 'No ratings'}</p>
                    {
                        [...Array(fullStars)].map((_, i) => (
                            <BsStarFill key={i} className="star-icon star-icon--filled" />
                        ))
                    }
                    {
                        hasHalfStar && <BsStarHalf className="star-icon star-icon--half" />
                    }
                    {
                        [...Array(maxStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
                            <BsStarFill key={i} className="star-icon star-icon--empty" />
                        ))
                    }
                </div>
                <p>{user && user.firstName + ' ' + user.lastName}</p>
            </div>
        </div>
    );
};

export default Course;