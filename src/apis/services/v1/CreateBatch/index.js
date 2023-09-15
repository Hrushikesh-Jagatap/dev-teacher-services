
//  Batch model
const Batch = require('@models/Batch');

// Create multiple batches
const  createBatches = async (batchData) => {
  try {
    const createdBatches = await Batch.create(batchData);
    return createdBatches;
  } catch (error) {
    throw new Error('Failed to create batches');
  }
}

module.exports = {
  createBatches,
};
