const TeacherData = require('@models/Teacher');

// Service function to update a teacher by ID
const updateTeacherById = async (userId, teacherData) => {
  try {
    const updatedTeacher = await TeacherData.findOneAndUpdate({ userId: userId }, teacherData);
    return updatedTeacher;
  } catch (error) {
    throw new Error('Failed to update teacher');
  }
};

module.exports = {
  updateTeacherById,
};
