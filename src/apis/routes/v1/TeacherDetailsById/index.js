const express = require('express');

const router = express.Router();

const TeacherDetailsByIdController = require('@controllers/v1/TeacherDetailsById')

router.get('/teachers/:id',async(req, res, next) => {
    try {
        const result = await TeacherDetailsByIdController.getTeacherById(req, res, next);
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
