const BatchService = require('@services/v1/UpdateBatchByTeacherId');
const TeacherService = require('@services/v1/GetByUserId');


// update /batches
const updateBatchByTeacherId = async (req, res) => {
  // here from token we find userId and search in our ... ... ... db
  const { userId } = req.body;
  try {
    // const teacher = await TeacherService.getUserById(userId);
    // if (!teacher) {
    //   return res.status(403).json({ error: 'User does not exist in the database to update batches.' });
    // }
    const updateBatches = await BatchService.updateBatchByTeacherId(req.params.id, req.body);
    const result = {
      data: null,
      success: false,
      error: 'Error in updating Batch',
    };
    if (!updateBatches) {
      return result;
    }
    result.data = updateBatches;
    result.success = true;
    return result;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  updateBatchByTeacherId,
};
