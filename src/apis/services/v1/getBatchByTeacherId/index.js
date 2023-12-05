const BatchData = require('@models/Batch');

// Service function to get  find batch by teacher ID
const getBatchByTeacherId = async (userId) => {
  try {
    const batch = await BatchData.find({ teacherId: userId });
    
    if (batch === null) {
      return {
        status: 404,
        message: 'BATCH_NOT_FOUND_FOR_TEACHER',
      };
    }
    return batch;
  } catch (error) {
    throw new Error('Failed to get Batch By TeacherId');
  }
};

module.exports = {
  getBatchByTeacherId
}  
