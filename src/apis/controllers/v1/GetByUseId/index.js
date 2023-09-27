const TeacherService = require('@services/v1/GetByUserId');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a single teacher by userID
const getUserById = async (req, res, next) => {
    try {
        const teacher = await TeacherService.getUserById(req.params.Id);
        
        if (!teacher) {
            return HttpResponseHandler.success(req, res, teacher);
        }
        return HttpResponseHandler.success(req, res, teacher);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getUserById
}  