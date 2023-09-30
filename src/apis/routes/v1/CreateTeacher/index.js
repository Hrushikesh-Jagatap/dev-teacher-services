const express = require('express');

const router = express.Router();

const CreateTeacherController = require('@controllers/v1/CreateTeacher');

router.post('/teacher-create', async (req, res, next) => {
    try {
        const result = await CreateTeacherController.createTeacher(req, res, next);
    } catch (error) {
        next(error);
    }
});



module.exports = router;
