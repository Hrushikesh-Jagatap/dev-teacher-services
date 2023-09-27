const express = require('express');

const router = express.Router();

const GetByUserIdController = require('@controllers/v1/GetByUseId')

router.get('/user/:Id', async (req, res, next) => {
    try {
        const result = await GetByUserIdController.getUserById(req, res, next);
    } catch (error) {
        next(error)
    }
});

module.exports = router;
