const TeacherService = require('@root/src/apis/services/v1/DeleteTeacherById');

// Controller function to delete a teacher by ID
const deleteTeacherById = async (req, res) => {
    try {
        const deletedTeacher = await TeacherService.deleteTeacherById(req.params.id);
        
        if (!deletedTeacher) {
            return res.status(404).json({ error: 'Teacher not found' });
        }
        
        const result = {
            data: null,
            success: true,
            message: 'Teacher deleted successfully',
        };
        
        return res.json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    deleteTeacherById
};
