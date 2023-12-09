const TeacherData = require('@models/Teacher');

// Service function to get a single batch by batchID
const getBatchByadminId = async (adminids) => {
  try {

    const data = await TeacherData.find({ "Admin_Review.admin_userid":  adminids  });


    if (data === null) {
      return {
        status: 404,
        message: 'BATCH_NOT_FOUND_FOR_STUDENT',
      };
    }
    return data;
  } catch (error) {
    // throw new Error('Failed to get Batch');
  }
};

module.exports = {
  getBatchByadminId
}  
