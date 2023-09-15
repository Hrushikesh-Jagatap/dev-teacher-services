const BatchData = require('@models/Batch');

// Service function to get a single batch by batchID
const getBatchByBatchId = async (batch_id) => {
    try {
      const batch = await BatchData.findOne({batch_id:batch_id});
      return batch;
    } catch (error) {
      throw new Error('Failed to get Batch');
    }
  };

module.exports = {
    getBatchByBatchId
}  