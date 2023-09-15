const express = require('express');

const router = express.Router();

const TeacherDetailsByIdController = require('@controllers/v1/TeacherDetailsById')

router.get('/teachers/:id',async(req, res) => {
    try {
        const result = await TeacherDetailsByIdController.getTeacherById(req, res);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }    
});

module.exports = router;
