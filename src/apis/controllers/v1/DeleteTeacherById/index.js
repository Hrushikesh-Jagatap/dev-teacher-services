const TeacherService = require('@root/src/apis/services/v1/DeleteTeacherById');

// Controller function to delete a teacher by ID
const deleteTeacherById = async (req, res) => {
    try {
        const deletedTeacher = await TeacherService.deleteTeacherById(req.params.id);

        const result = {};

        if (!deletedTeacher) {
            return result;
        }

        return result;

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    deleteTeacherById
};
