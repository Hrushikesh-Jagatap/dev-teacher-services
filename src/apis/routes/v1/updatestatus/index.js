const express = require('express');
const router = express.Router();
const UpdatestatusController = require('@controllers/v1/UpdateStatus');

router.put('/status/:id', async (req, res) => {
    try {
        // Extract the necessary data from the request body
        // const { batchName, startDate, endDate } = req.body;
        const result = await UpdatestatusController.updatestatus(req, res);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
