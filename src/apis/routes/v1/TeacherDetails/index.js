const express = require('express');

const router = express.Router();

const TeacherDetailsControllers = require('@controllers/v1/TeacherDetails')

router.get('/teachers',async(req, res) => {
    try {
        const result = await TeacherDetailsControllers.getAllTeachers(req, res);
        res.status(201).json({result});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
module.exports = router;
