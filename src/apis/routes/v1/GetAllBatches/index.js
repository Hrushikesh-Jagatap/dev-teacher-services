const express = require('express');
const router = express.Router();
const GetAllBatchesController = require('@controllers/v1/GetAllBatches')
router.get('/getall/batches', async (req, res, next) => {
    try {
        const result = await GetAllBatchesController.Getallbatches(req, res, next);
    } catch (error) {
        next(error)
    }
});
module.exports = router;
