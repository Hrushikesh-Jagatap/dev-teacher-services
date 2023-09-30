const express = require('express');

const router = express.Router();

const GetBystatusController = require('@controllers/v1/serachbystatus')

router.get('/search/:id',async(req, res,next) => {
    try {
        const result = await GetBystatusController.getBystatus(req, res,next);
        
    } catch (error) {
       next(error);
    }    
});

module.exports = router;
