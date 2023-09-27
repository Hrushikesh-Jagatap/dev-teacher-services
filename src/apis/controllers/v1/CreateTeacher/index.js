const TeacherService = require('@root/src/apis/services/v1/CreateTeacher');
const { HttpResponseHandler, Logger: log } = require('intelli-utility');

// Controller function to create a new teacher
const createTeacher = async (req, res, next) => {
    try {
        const newTeacher = await TeacherService.createTeacher(req.body);
        if (!newTeacher) {
            return HttpResponseHandler.success(req, res, newTeacher);
        }
        return HttpResponseHandler.success(req, res, newTeacher);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createTeacher
};
