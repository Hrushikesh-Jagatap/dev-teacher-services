const express = require('express');

const router = express.Router();

const GetBystatusController = require('@controllers/v1/serachbystatus')

router.get('/search/:id',async(req, res) => {
    try {
        const result = await GetBystatusController.getBystatus(req, res);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }    
});

module.exports = router;
