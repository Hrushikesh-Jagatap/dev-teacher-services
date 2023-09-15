const express = require('express');

const router = express.Router();

const CreateTeacherController = require('@controllers/v1/CreateTeacher');

router.post('/teacher-create', async (req, res) => {
    try {
        const result = await CreateTeacherController.createTeacher(req, res);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



module.exports = router;
