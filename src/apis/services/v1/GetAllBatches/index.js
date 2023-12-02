const BatchData = require('@models/Batch');
// Service function to get a single batch by ID
const getall = async () => {
    try {
      const Batch = await BatchData.find({});
      return Batch;
    } catch (error) {
      throw new Error('Failed to get Batch');
    }
  };
module.exports = {
  getall
}  
