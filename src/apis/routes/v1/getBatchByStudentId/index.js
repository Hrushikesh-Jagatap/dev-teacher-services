const express = require('express');

const router = express.Router();

const getBatchBystudentIdController = require('@controllers/v1/getBatchByStudentId')

router.get('/student/:id',async(req, res, next) => {
    try {
        const result = await getBatchBystudentIdController.getBatchByStudentId(req, res, next);;
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
