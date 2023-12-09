const express = require('express');

const router = express.Router();

const getBatchByadminIdController = require('@controllers/v1/getsearchByadmintId')

router.get('/admin/:id',async(req, res, next) => {
    try {
        const result = await getBatchByadminIdController.getBatchByadminId(req, res, next);;
    } catch (error) {
        next(error);
    }    
});

module.exports = router;
