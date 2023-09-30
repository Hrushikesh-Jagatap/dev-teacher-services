const express = require('express');

const router = express.Router();

const searchController = require('@controllers/v1/searchApi');

router.get('/search', async (req, res, next) => {
    try {
        const result = await searchController.searchTeacher(req, res, next);
    } catch (error) {
        next(error)
    }
});

module.exports = router;

