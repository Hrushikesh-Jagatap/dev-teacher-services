const TeacherData = require('@models/Teacher');

// Service function to create a new teacher
const createTeacher = async (teacherData) => {
    try {

      const teachers = await TeacherData.find();
      let teacherId= teachers.length;

    
    let teacher_id =teacherId + 1;
    teacherData.teacher_id =teacher_id; 
           
    const newTeacher = await TeacherData.create(teacherData);
      return newTeacher;
    } catch (error) {
      throw new Error('Failed to create teacher');
    }
  };

module.exports = {
    createTeacher
};
