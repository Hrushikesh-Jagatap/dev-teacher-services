
const express = require('express');

const router = express.Router();

const addBatchToStuController = require('@controllers/v1/addTeachToBatch');

router.put('/add-to-teach/:userId', async (req, res, next) => {
    try {
        const result = await addBatchToStuController.addToBatch(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;

