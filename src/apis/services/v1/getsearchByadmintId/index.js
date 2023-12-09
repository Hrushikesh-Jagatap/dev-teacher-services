const TeacherData = require('@models/Teacher');

// Service function to get a single batch by batchID
const getBatchByadminId = async (adminids) => {
  try {

    // if(!adminids)
    // {
    //   return "plz give me admin id for";
    // }
    // const data = await TeacherData.find({ "Admin_Review.admin_userid":  adminids  }).select("userId personalDetails teachingDetails educationDetails OnlieTeachingDeatis OfflineTeachingDeatis")
    // .lean().exec();;
const teacherDetails = await TeacherData.find({ "Admin_Review.admin_userid": adminids })
  .select("personalDetails Admin_Review")
  .lean()
  .exec();
   if (teacherDetails === null) {
      return {
        status: 404,
        message: 'NOT_FOUND_FOR_TEARCHER',
      };
    }

const formattedData = teacherDetails.map((teacher) => ({
  
  personalDetails: teacher.personalDetails,
  Admin_Review:teacher.Admin_Review
}));

console.log(formattedData);


    return formattedData;
  } catch (error) {
    // throw new Error('Failed to get Batch');
  }
};

module.exports = {
  getBatchByadminId
}  
