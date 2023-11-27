const express = require('express');

const router = express.Router();

const splashApiforadminController = require('@controllers/v1/splashapiforadmin')

router.get('/splash/admin/abc', async (req, res, next) => {
    try {
        const data = await splashApiforadminController.getSplash(req, res, next);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
