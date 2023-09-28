const express = require('express');

const router = express.Router();

const UpdateTeacherByIdController = require('@controllers/v1/UpdateTeacherById')

router.put('/userId/:id', async(req, res, next) => {
    try {
        const result = await UpdateTeacherByIdController.updateTeacherById(req, res, next);
    } catch (error) {
        console.error(error);
        next(error);
    } 

});

module.exports = router;
