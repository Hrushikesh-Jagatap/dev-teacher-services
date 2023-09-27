const express = require('express');
const router = express.Router();
const UpdateBatchByTeacherIdController = require('@controllers/v1/UpdateBatchByTeacherId');

router.put('/batch/:id', async (req, res, next) => {
    try {
        // Extract the necessary data from the request body
        // const { batchName, startDate, endDate } = req.body;
        const result = await UpdateBatchByTeacherIdController.updateBatchByTeacherId(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
