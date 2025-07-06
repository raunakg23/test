"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCourses } from "./coursesSlice";

const CoursesList = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  return (
    <div className="courses-container">
      <h1>Live Courses</h1>
      {courses &&
        courses.map((course) => (
          <div key={course.id || course._id} className="course-item">
            <div
              dangerouslySetInnerHTML={{
                __html: course.content || course.description,
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default CoursesList;
