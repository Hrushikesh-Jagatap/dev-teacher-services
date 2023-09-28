const BatchService = require('@services/v1/UpdateBatchByTeacherId');
const TeacherService = require('@services/v1/GetByUserId');
const { HttpResponseHandler } = require('intelli-utility');

// update /batches
const updateBatchByTeacherId = async (req, res, next) => {
  // here from token we find userId and search in our ... ... ... db
  const { userId } = req.body;
  
  try {

    const updateBatches = await BatchService.updateBatchByTeacherId(req.params.id, req.body);
 
    if (!updateBatches) {
      return HttpResponseHandler.success(req, res, updateBatches);
    }
   
    return HttpResponseHandler.success(req, res, updateBatches);

  } catch (error) {
    next(error)
  }
};

module.exports = {
  updateBatchByTeacherId,
};
