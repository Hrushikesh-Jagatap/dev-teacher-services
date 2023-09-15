const TeacherData = require('@models/Teacher');

// Service function to update a teacher by ID
const updateTeacherById = async (teacherId, teacherData) => {
  try {
    const updatedTeacher = await TeacherData.findByIdAndUpdate(teacherId, teacherData, { new: true });
    return updatedTeacher;
  } catch (error) {
    throw new Error('Failed to update teacher');
  }
};

module.exports = {
  updateTeacherById,
};
