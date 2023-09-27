const express = require('express');

const router = express.Router();

const getBatchByTeacherIdController = require('@controllers/v1/getBatchByTeacherId')

router.get('/teacher/:Id',async(req, res, next) => {
    try {
        const result = await getBatchByTeacherIdController.getBatchByTeacherId(req, res, next);
    } catch (error) {
        // console.error(error);
        // res.status(500).json({ error: 'Internal server error' });
        next(error);
    }    
});

module.exports = router;
