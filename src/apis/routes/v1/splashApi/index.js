const express = require('express');

const router = express.Router();

const { HttpResponseHandler } = require('intelli-utility');

const splashApiController = require('@controllers/v1/splashApi')

router.get('/splash/:Id', async (req, res, next) => {
    
    try {

        const data = await splashApiController.getSplash(req, res, next);

        HttpResponseHandler.success(req, res, data);

    } catch (error) {

        next(error);
    }
});

module.exports = router;
