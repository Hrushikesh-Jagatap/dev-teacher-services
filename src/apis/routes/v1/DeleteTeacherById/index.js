const express = require('express');

const router = express.Router();

const DeleteTeacherByIdController = require('@controllers/v1/DeleteTeacherById')

router.delete('/:id', async (req, res) => {
    const result = await DeleteTeacherByIdController.deleteTeacherById(req)
    if (!result) {
        res.status(404).json({ message: 'Teacher not found' });
    } else {
        res.json({ message: 'Teacher deleted successfully' });
    }
});

module.exports = router;


module.exports = router;
