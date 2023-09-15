const express = require('express');
const router = express.Router();
const UpdateBatchByTeacherIdController = require('@controllers/v1/UpdateBatchByTeacherId');

router.put('/batch/:id', async (req, res) => {
    try {
        // Extract the necessary data from the request body
        // const { batchName, startDate, endDate } = req.body;
        const result = await UpdateBatchByTeacherIdController.updateBatchByTeacherId(req, res);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
