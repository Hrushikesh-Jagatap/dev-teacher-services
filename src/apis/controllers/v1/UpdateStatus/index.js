const TeacherService = require('@services/v1/Updatestatus');

// Controller function to update a teacher by ID
const updatestatus = async (req, res) => {
  try {
    const updatedTeacher = await TeacherService.updateTeacherStatus(req.params.id, req.body);
    const result = {
      data: null,
      success: false,
      error: 'Error in updating Teacher',
    };
    if (!updatedTeacher) {
      return result;
    }
    result.data = updatedTeacher;
    result.success = true;
    return result;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  updatestatus,
};
