const batchService = require('@services/v1/CreateBatch');
const TeacherService = require('@services/v1/GetByUserId');
const { HttpResponseHandler } = require('intelli-utility');

// POST /batches
const createBatches = async (req, res, next) => {

  const { userId } = req.body

  try {
    const teacher = await TeacherService.getUserById(userId);

    if (!teacher) {
      return HttpResponseHandler.success(req, res, teacher);
    }

    const batchData = req.body;

    const createdBatches = await batchService.createBatches(batchData);

    return HttpResponseHandler.success(req, res, createdBatches);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBatches,
};
