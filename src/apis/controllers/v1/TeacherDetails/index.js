const TeacherService = require('@services/v1/TeacherDetails');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get all teachers
const getAllTeachers = async (req, res, next) => {
  try {
    const teachers = await TeacherService.getAllTeachers();
    if (!teachers) {
      return HttpResponseHandler.success(req, res, teachers);
    }
    return HttpResponseHandler.success(req, res, teachers);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTeachers
}  