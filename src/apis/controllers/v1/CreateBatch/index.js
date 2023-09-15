const batchService = require('@services/v1/CreateBatch');
const TeacherService = require('@services/v1/GetByUserId');

// POST /batches
const createBatches = async (req, res) => {
  const { userId } = req.body;
  
  try {
    const teacher = await TeacherService.getUserById(userId);
    
    if (!teacher) {
      return res.status(403).json({ error: 'User does not exist in the database to create batches.' });
    }
    
    const batchData = req.body;
    const createdBatches = await batchService.createBatches(batchData);
    
    const result = {
      data: createdBatches,
      success: true,
      message: 'Batches created successfully',
    };
    
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBatches,
};
