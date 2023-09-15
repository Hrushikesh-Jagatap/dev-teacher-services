const express = require('express');

const router = express.Router();

const getBatchByBatchIdController = require('@controllers/v1/getBatchByBatchId')

router.get('/batch/:id',async(req, res) => {
    try {
        const result = await getBatchByBatchIdController.getBatchByBatchId(req, res);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }    
});

module.exports = router;
