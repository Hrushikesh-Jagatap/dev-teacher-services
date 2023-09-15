const TeacherData = require('@models/Teacher');

// Service function to create a new teacher
const createTeacher = async (teacherData) => {
    try {
      const newTeacher = await TeacherData.create(teacherData);
      return newTeacher;
    } catch (error) {
      throw new Error('Failed to create teacher');
    }
  };

module.exports = {
    createTeacher
};
