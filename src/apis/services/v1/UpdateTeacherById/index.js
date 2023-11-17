const TeacherData = require('@models/Teacher');

// Service function to update a teacher by ID
const updateTeacherById = async (userId, teacherData) => {
  try {
    const updatedTeacher = await TeacherData.findOneAndUpdate({ userId: userId }, teacherData);
    if (updatedTeacher === null) {
      return {
          status: 404,
          message: 'ERROR_WHILE_UPDATING',
      };
  }
    return updatedTeacher;
  } catch (error) {
    throw new Error('Failed to update teacher');
  }
};

const addBatchDetails = async (userId, BatchData,batchData) => {
  try {
    const teacher = await TeacherData.findOne({ userId });
     let updateTeacher;
if(batchData.mode=="online"){
  updateTeacher =  teacher.OnlieTeachingDeatis.batch_taught.push(BatchData);
}
else
{
  updateTeacher =  teacher.OfflineTeachingDeatis.batch_taught.push(BatchData);
}

  
    console.log(updateTeacher)
    await teacher.save();

    if(!updateTeacher) {
      return ('Error')
    }
    return BatchData;

  } catch (error) {
    throw new Error('Failed to update Batch Details in Teacher Database');
  }
}

module.exports = {
  updateTeacherById,
  addBatchDetails
};
