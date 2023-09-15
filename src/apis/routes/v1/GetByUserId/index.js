const express = require('express');

const router = express.Router();

const GetByUserIdController = require('@controllers/v1/GetByUseId')

router.get('/user/:Id',async(req, res) => {
    try {
        const result = await GetByUserIdController.getUserById(req, res);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }    
});

module.exports = router;
