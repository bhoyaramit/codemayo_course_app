import express from 'express';

import { getAllCourses,createCourse, getCourseLectures, addLecture, deleteCourse, deleteLecture } from '../controllers/courseController.js';
import { isAuthenticated,authorizeAdmin,authorizeSubscribers } from '../middlewares/auth.js';
import singleUpload from '../middlewares/multer.js';



const router = express.Router();


// Get All courses without lectures
router.route("/courses").get(getAllCourses);


// create new course - only admin

router.route("/createcourses").post(isAuthenticated,authorizeAdmin,singleUpload ,createCourse);


// Add lecture, Delete Course, Get Course Details

router.route("/course/:id")
.get(isAuthenticated,authorizeSubscribers, getCourseLectures)
.post(isAuthenticated,authorizeAdmin,singleUpload, addLecture)
.delete(isAuthenticated, authorizeAdmin, deleteCourse);

// Delete Lecture
router.route("/lecture").delete(isAuthenticated, authorizeAdmin, deleteLecture);


export default router;
