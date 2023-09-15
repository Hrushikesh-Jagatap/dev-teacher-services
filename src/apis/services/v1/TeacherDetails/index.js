const TeacherData = require('@models/Teacher');

// Service function to get all teachers
const getAllTeachers = async () => {
  try {
    const teachers = await TeacherData.find();
    return teachers;
  } catch (error) {
    throw new Error('Failed to get teachers');
  }
};


module.exports = {
    getAllTeachers
}  