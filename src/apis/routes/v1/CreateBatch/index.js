
const express = require('express');

const router = express.Router();

const CreateBatchController = require('@controllers/v1/CreateBatch');

router.post('/batch', async (req, res) => {
    // Extract the necessary data from the request body
    try {
        // const { batchName, startDate, endDate } = req.body;
        const result = await CreateBatchController.createBatches(req, res);
        // res.status(201).json({ message: 'Batch created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;

