const TeacherService = require('@services/v1/UpdateTeacherById');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to update a teacher by ID
const updateTeacherById = async (req, res, next) => {
  try {
    const updatedTeacher = await TeacherService.updateTeacherById(req.params.id, req.body);
    if (!updatedTeacher) {
      return HttpResponseHandler.success(req, res, updatedTeacher);
    }
    return HttpResponseHandler.success(req, res, updatedTeacher);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateTeacherById,
};
