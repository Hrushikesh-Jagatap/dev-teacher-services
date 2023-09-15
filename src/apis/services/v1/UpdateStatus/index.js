// const TeacherData = require('@models/Teacher');

// // Service function to update a teacher by ID
// const updatestatus = async (teacherId, teacherData) => {
//   try {

//     const result = await TeacherData.findOne({ teacher_id : teacherId });
//     let data=[{sid:null,status:null,about:null}];
//     let sid=teacherData.sid;
//     let status=teacherData.status;
//     let about=teacherData.about;
    
//     const techerpersenet = await TeacherData.findOne({ 'req_status.sid' : sid });
//     if(!techerpersenet){
       

//  data.sid=teacherData.sid;
//      data.status=teacherData.status;
//      data.about=teacherData.about;
     

//      result.req_status[1].status = data.status;
//      result.req_status[1].sid = data.sid;
//      result.req_status[1].about = data.about;
//     //  teacherData.result.req_status.push(data)
//     // result.req_status.push(data);
//     }

//     else{
//    data.sid=teacherData.sid;
//      data.status=teacherData.status;
//      data.about=teacherData.about;
     
//     result.req_status=data;
//     }


    

//     // console.log(result.req_status);

//      console.log(result);
//     const updatedTeacher = await TeacherData.create(result);
//         return updatedTeacher;
//   } catch (error) {
//     console.log(error);
//     throw new Error('Failed to update teacher');
//   }
// };

// module.exports = {
//   updatestatus,
// };
const TeacherData = require('@models/Teacher');

const updatestatus = async (teacherId, teacherData) => {
  try {
    const result = await TeacherData.findOne({ teacher_id: teacherId });

    if (!result) {
      throw new Error('Teacher not found');
    }

    const { sid, status, about } = teacherData;
    const existingStatus = result.req_status.find((status) => status.sid === sid);

    if (existingStatus) {
      existingStatus.status = status;
      existingStatus.about = about;
    } else {
      result.req_status.push({ sid, status, about });
    }

    const updatedTeacher = await result.save();
    return updatedTeacher;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to update teacher');
  }
};

module.exports = {
  updatestatus,
};