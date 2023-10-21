import { useEffect, useState } from 'react';

const useGetCourses = () => {
  const [courses, setCourses] = useState([]);

  const getTotalRatings = (courses) => {
    const ratings = {};

    for (const course of courses) {
      const reviews = course.reviews || [];
      const totalRatings = reviews.reduce((acc, review) => acc + review.rating, 0);
      const averageRating = totalRatings / Math.max(reviews.length, 1);
      ratings[course.id] = averageRating;
    }
    console.log(ratings)
    return ratings;
  }

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        };
        const response = await fetch('http://localhost:8080/courses', options);
        const data = await response.json();

        const instructorIds = data.map(course => course.instructorId);
        const userPromises = instructorIds.map(instructorId =>
          fetch(`http://localhost:8080/users/${instructorId}`, options)
            .then(response => response.json())
        );
        const userData = await Promise.all(userPromises);
        const coursesWithUserData = data.map((course, index) => ({
          ...course,
          userData: userData[index],
        }));

        setCourses(coursesWithUserData);
        console.log(coursesWithUserData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourseData();
  }, []);

  const totalRatings = getTotalRatings(courses)

  return { courses, totalRatings };
};

export default useGetCourses