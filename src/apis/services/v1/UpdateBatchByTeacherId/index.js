const BatchData = require('@models/Batch');

// Service function to update a batch by teacher ID
const updateBatchByTeacherId = async (batchId, batchData) => {
    try {
        const updateBatch = await BatchData.findOneAndUpdate(
            { batch_id: batchId },
            batchData,
            { new: true }
        );
        if (!updateBatch) {
            throw new Error('Batch not found');
        }
        return updateBatch;
    } catch (error) {
        throw new Error('Failed to update Batch');
    }
};

module.exports = {
    updateBatchByTeacherId,
};
