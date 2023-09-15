const TeacherData = require('@models/Teacher');

// Service function to delete a teacher by ID
const deleteTeacherById = async (teacherId) => {
    try {
      const deletedTeacher = await TeacherData.findByIdAndDelete(teacherId);
      return deletedTeacher;
    } catch (error) {
      throw new Error('Failed to delete teacher');
    }
  };

module.exports = {
    deleteTeacherById
}