const express = require('express');
const router = express.Router();
const getBatchBycreaterIdController = require('@controllers/v1/getBatchByAdminid')
router.get('/createruserid/:Id',async(req, res, next) => {
    try {
        const result = await getBatchBycreaterIdController.getBatchAdminid(req, res, next);
    } catch (error) {
        // console.error(error);
        // res.status(500).json({ error: 'Internal server error' });
        next(error);
    }    
});
module.exports = router;
