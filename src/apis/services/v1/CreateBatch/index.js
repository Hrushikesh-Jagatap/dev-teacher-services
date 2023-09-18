
//  Batch model
const Batch = require('@models/Batch');

// Create multiple batches
const  createBatches = async (batchData) => {
  try {
      const batches = await Batch.find();
      let batchId= batches.length;

    
    let batch_id =batchId + 1;
    batchData.batch_id=batch_id;
    const createdBatches = await Batch.create(batchData);
    return createdBatches;
  } catch (error) {
    throw new Error('Failed to create batches');
  }
}

module.exports = {
  createBatches,
};
