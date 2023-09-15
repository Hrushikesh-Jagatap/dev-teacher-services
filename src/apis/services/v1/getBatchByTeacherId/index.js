const BatchData = require('@models/Batch');

// Service function to get a single teacher by ID
const getBatchByTeacherId = async (teacherId) => {
  try {
    const batch = await BatchData.findOne({ teacher_id: teacherId });
    return batch;
  } catch (error) {
    throw new Error('Failed to get teacher');
  }
};

module.exports = {
  getBatchByTeacherId
}  