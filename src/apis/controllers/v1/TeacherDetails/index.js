const TeacherService = require('@services/v1/TeacherDetails');

// Controller function to get all teachers
const getAllTeachers = async (req, res) => {
  try {
    const teachers = await TeacherService.getAllTeachers();
    // res.status(200).json(teachers);
    const result = {
      data: null,
      success: false,
      error: 'Error in Finding  All teacher Data',
    }
    if (!teachers) {
      return result;
    }
    result.data = teachers;
    result.success = true;
    return result;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllTeachers
}  