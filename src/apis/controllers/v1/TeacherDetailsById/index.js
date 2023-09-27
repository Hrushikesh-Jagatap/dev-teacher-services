const TeacherService = require('@services/v1/TeacherDetailsById');
const { HttpResponseHandler } = require('intelli-utility');


// Controller function to get a single teacher by ID
const getTeacherById = async (req, res, next) => {
    try {
        const teacher = await TeacherService.getTeacherById(req.params.id.toString());
        if (!teacher) {
            return HttpResponseHandler.success(req, res, teacher);
        }
        return HttpResponseHandler.success(req, res, teacher);
        
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getTeacherById
}  