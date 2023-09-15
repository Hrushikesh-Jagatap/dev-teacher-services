const TeacherService = require('@services/v1/TeacherDetailsById');

// Controller function to get a single teacher by ID
const getTeacherById = async (req, res) => {
    try {
        const teacher = await TeacherService.getTeacherById(req.params.id.toString());
        const result = {
            data: null,
            success: false,
            error: 'Error in Finding teacher ',
        }
        if (!teacher) {
            return result;
        }
        result.data = teacher;
        result.success = true;
        return result;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getTeacherById
}  