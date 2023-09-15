const express = require('express');

const router = express.Router();

const getBatchByTeacherIdController = require('@controllers/v1/getBatchByTeacherId')

router.get('/teacher/:Id',async(req, res) => {
    try {
        const result = await getBatchByTeacherIdController.getBatchByTeacherId(req, res);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }    
});

module.exports = router;
