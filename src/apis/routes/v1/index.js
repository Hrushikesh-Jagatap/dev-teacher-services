const express = require('express');

const router = express.Router();

const TeacherDetails = require('./TeacherDetails');

const CreateTeacher = require('./CreateTeacher');

const TeacherDetailsById = require('./TeacherDetailsById')

const UpdateTeacherById = require('./UpdateTeacherById');

// const NotificationRoute = require('./Notification');

const deleteTeacherById = require('./UpdateTeacherById')

const GetByuserId = require('./GetByUserId')

const CreateBatch = require('./CreateBatch')

const UpdateBatchByTeacherId = require('./UpdateBatchByTeacherId')

const getBatchByBatchId = require('./getBatchByBatchId')

const getBatchByTeacherId = require('./getBatchByTeacherId')

const getBatchByStudentId = require("./getBatchByStudentId")
const updatestatus = require("./updatestatus")



// Route to get all teachers
router.use('/', TeacherDetails);

// Route to create a new teacher
router.use('/', CreateTeacher);

// Route to get a single teacher by ID
router.use('/', TeacherDetailsById);

// Route to update a teacher by ID
router.use('/', UpdateTeacherById);

// Route to delete a teacher by ID
router.use('/', deleteTeacherById);

// Route to get user By Id
router.use('/', GetByuserId);

// Route to CreateBatch
router.use('/', CreateBatch);

// route to update batch by teacherId
router.use('/', UpdateBatchByTeacherId);

// router to get batch by teacherId;
router.use('/', getBatchByTeacherId);

// router to get batch by studentId
router.use('/', getBatchByStudentId)

// route to get batch by BatchId
router.use('/', getBatchByBatchId )



router.use('/',updatestatus)

module.exports = router;
