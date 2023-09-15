const TeacherData = require('@models/Teacher');

// Service function to get a single teacher by ID
const getTeacherById = async (_id) => {
    try {
      const teacher = await TeacherData.findById(_id);
      return teacher;
    } catch (error) {
      throw new Error('Failed to get teacher');
    }
  };

module.exports = {
    getTeacherById
}  