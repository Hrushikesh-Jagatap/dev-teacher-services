const TeacherService = require('@root/src/apis/services/v1/CreateTeacher');

// Controller function to create a new teacher
const createTeacher = async (req, res) => {
    try {
        const newTeacher = await TeacherService.createTeacher(req.body);
        
        if (!newTeacher) {
            return res.status(400).json({ error: 'Error in creating teacher' });
        }
        
        const result = {
            data: newTeacher,
            success: true,
            message: 'Teacher created successfully',
        };
        
        return res.status(201).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    createTeacher
};
