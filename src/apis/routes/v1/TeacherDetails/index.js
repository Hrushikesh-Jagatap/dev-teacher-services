const express = require('express');

const router = express.Router();

const TeacherDetailsControllers = require('@controllers/v1/TeacherDetails')

router.get('/teachers',async(req, res, next) => {
    try {
        const result = await TeacherDetailsControllers.getAllTeachers(req, res);
    } catch (error) {
        next(error);
    }
});
module.exports = router;
