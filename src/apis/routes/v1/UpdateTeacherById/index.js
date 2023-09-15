const express = require('express');

const router = express.Router();

const UpdateTeacherByIdController = require('@controllers/v1/UpdateTeacherById')

router.put('/teachers/:id', async(req, res) => {
    try {
        const result = await UpdateTeacherByIdController.updateTeacherById(req, res);
        return res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    } 

});

module.exports = router;
