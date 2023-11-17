// const TeacherData = require('@models/Teacher');
// const { loadBalancer, SYSTEM_TOKEN } = require('@config');
// const axios = require('axios');
//     const getStudent = async (args) => {
//   console.log('user id is', args);
 
//   try {
//     const config = {
//       method: 'get',
//       url: `${loadBalancer}/sts/apis/v1/user/${args}`,
//       headers: {
//         app_name: 'studentApp',
//         app_version_code: '101',
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${SYSTEM_TOKEN}`,
//       },
//     };
//     const result = await axios(config);
//     if (result?.data) {
//       return result.data;
//     }
//     return null;
//   } catch (error) {
//     console.log(error);
//     // throw new ORDER_SERVICE_ERROR(error);
//   }
// };
// const updateTeacherStatus = async (tid_userId, teacherData) => {
//   try {
//     const teacher = await TeacherData.findOne({ userId: tid_userId });

//     if (teacher === null) {
//       return {
//           status: 404,
//           message: 'TEACHER_NOT_FOUND',
//       };
//   }
  
//     const { sid_userId, status, about, subject, flag, classes } = teacherData;
//     let existingStatus = teacher.req_status.find((reqStatus) => reqStatus.sid_userId == sid_userId);

//     if (existingStatus) {
//       existingStatus.status = status;
//       // existingStatus.about = about;
//     } else {

//     const abc = await getStudent(sid_userId);
//     const name=abc.data.personalDetails.first_name ;
//     const profileimage=abc.data.personalDetails.profileImage;
      
//     teacher.req_status.push({ sid_userId, status, about, subject, flag, classes,name,profileimage});
    
//     }

//     const updatedTeacher = await teacher.save();
//     if (status == "Accepted") {
//       // Push the new teacher data into the userId array
//     const abc = await getStudent(sid_userId);
//     var name=abc.data.personalDetails.first_name ;
//     var profileimage=abc.data.personalDetails.profileImage;
//     const newSeacherData = { student_userId: sid_userId, subject, classes, name,profileimage };

//       updatedTeacher.student_userId.push(newSeacherData);
//       await updatedTeacher.save();
//     }

//     if (status !== "requested") {
//       const config = {
//         method: 'put',
//         url: `${loadBalancer}/sts/apis/v1/status/${sid_userId}`,
//         headers: {
//           app_name: 'teacherApp',
//           app_version_code: '101',
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${SYSTEM_TOKEN}`,
//         },
//         data: {
//           tid_userId: tid_userId,
//           status: status,
//           about: about,
//           subject: subject,
//           classes: classes,
//           flag: flag,
//         },
//       };

//       const teacherUpdateResult = await axios(config);
//       //  console.log('Teacher status updated:', teacherUpdateResult.data);
//     }

//     if (status == 'Accepted') {
//       const queryConditions = {
//         "req_status.sid_userId": sid_userId,
//         "req_status.status": "requested",
//         "req_status.subject": subject,
//         "req_status.classes": classes,
//         "req_status.flag": true,
//         "req_status.name":name,
//         "req_status.profile":profileimage
//       };

//       let findteacher = await TeacherData.find(queryConditions).exec();

//       // while (findteacher !== null) {
//         // Update the flag to false for the matching req_status object
//         findteacher.req_status.forEach((reqStatus) => {
//           if (
//             reqStatus.sid_userId === sid_userId &&
//             reqStatus.status === 'requested' &&
//             reqStatus.subject === subject &&
//             reqStatus.classes === classes &&
//             reqStatus.flag === true
//           ) {
//             reqStatus.flag = false;
//           }
//         });

//         const updatedTeacher = await findteacher.save();
//         console.log(updatedTeacher);

//         // Find the next matching teacher
//         findteacher = await TeacherData.findOne(queryConditions).exec();
//         console.log(findteacher);
//       }

//     // }
//     return updatedTeacher;
//   } catch (error) {
//     console.error('Error updating teacher status:', error.message);
//     throw new Error('Failed to update teacher');
//   }
// };

// module.exports = {
//   updateTeacherStatus,
// };
const TeacherData = require('@models/Teacher');
const { loadBalancer, SYSTEM_TOKEN } = require('@config');
const axios = require('axios');

const getStudent = async (sid_userId) => {
  try {
    const config = {
      method: 'get',
      url: `${loadBalancer}/sts/apis/v1/user/${sid_userId}`,
      headers: {
        app_name: 'studentApp',
        app_version_code: '101',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SYSTEM_TOKEN}`,
      },
    };

    const result = await axios(config);
    return result.data || null;
  } catch (error) {
    console.error('Error fetching student data:', error.message);
    return null;
  }
};

const updateTeacherStatus = async (tid_userId, teacherData) => {
  try {
    // Find the teacher by userId
    const teacher = await TeacherData.findOne({ userId: tid_userId });

    if (!teacher) {
      return {
        status: 404,
        message: 'TEACHER_NOT_FOUND',
      };
    }

    //const { sid_userId, status, about, subject, flag, classes } = teacherData;
  
  
    const { sid_userId, status, about, subject, flag, classes } = teacherData;
    let existingStatus = teacher.req_status.find((reqStatus) => reqStatus.sid_userId == sid_userId);

    if (existingStatus) {
      existingStatus.status = status;
      // existingStatus.about = about;
    } else {

    const abc = await getStudent(sid_userId);
    const name=abc.data.personalDetails?.first_name ;
    const profileimage=abc.data.personalDetails?.profileImage;
      
    teacher.req_status.push({ sid_userId, status, about, subject, flag, classes,name,profileimage});
    
    }

    const updatedTeacher = await teacher.save();
    if (status == "Accepted") {
      // Push the new teacher data into the userId array
    const abc = await getStudent(sid_userId);
    var name=abc.data.personalDetails?.first_name ;
    var profileimage=abc.data.personalDetails?.profileImage;
    const newSeacherData = { student_userId: sid_userId, subject, classes, name,profileimage };

    // Check if the teacher already has a status for the given sid_userId
    const existingStatus = teacher.req_status.find((reqStatus) => reqStatus.sid_userId == sid_userId);

    // If the status exists, update it; otherwise, add a new status
    if (existingStatus) {
      existingStatus.status = status;
      // existingStatus.about = about; // Uncomment if you want to update 'about' as well
    } else {
      const studentData = await getStudent(sid_userId);
      const name = studentData?.data?.personalDetails?.first_name;
      const profileimage = studentData?.data?.personalDetails?.profileImage;

      teacher.req_status.push({ sid_userId, status, about, subject, flag, classes, name, profileimage });
    }

    // Save the updated teacher
    const updatedTeacher = await teacher.save();

    // If status is 'Accepted', update student_userId array and call external API
    if (status === 'Accepted') {
      const studentData = await getStudent(sid_userId);
      const name = studentData?.data?.personalDetails?.first_name;
      const profileimage = studentData?.data?.personalDetails?.profileImage;

      const newSeacherData = { student_userId: sid_userId, subject, classes, name, profileimage };
      updatedTeacher.student_userId.push(newSeacherData);
      await updatedTeacher.save();
    }

    // If status is not 'requested', update external system
    if (status !== 'requested') {
      await updateExternalSystem(sid_userId, tid_userId, status, about, subject, classes, flag);
    }

    // If status is 'Accepted', update flag for requested teachers
    if (status === 'Accepted') {
      await updateFlagForRequestedTeachers(sid_userId, subject, classes);
    }

    return updatedTeacher;
  } }catch (error) {
    console.error('Error updating teacher status:', error.message);
    throw new Error('Failed to update teacher');
  }
};

const updateExternalSystem = async (sid_userId, tid_userId, status, about, subject, classes, flag) => {
  try {
    const config = {
      method: 'put',
      url: `${loadBalancer}/sts/apis/v1/status/${sid_userId}`,
      headers: {
        app_name: 'teacherApp',
        app_version_code: '101',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SYSTEM_TOKEN}`,
      },
      data: {
        tid_userId,
        status,
        about,
        subject,
        classes,
        flag,
      },
    };

    const teacherUpdateResult = await axios(config);
    console.log('Teacher status updated:', teacherUpdateResult.data);
  } catch (error) {
    console.error('Error updating teacher status in external system:', error.message);
    throw new Error('Failed to update teacher status in external system');
  }
};

const updateFlagForRequestedTeachers = async (sid_userId, subject, classes) => {
  try {
    const queryConditions = {
      "req_status.sid_userId": sid_userId,
      "req_status.status": "requested",
      "req_status.subject": subject,
      "req_status.classes": classes,
      "req_status.flag": true,
    };

    const teachersToUpdate = await TeacherData.find(queryConditions).exec();
if(teachersToUpdate!=null)
{
    for (const teacherToUpdate of teachersToUpdate) {
      teacherToUpdate.req_status.forEach((reqStatus) => {
        if (
          reqStatus.sid_userId === sid_userId &&
          reqStatus.status === 'requested' &&
          reqStatus.subject === subject &&
          reqStatus.classes === classes &&
          reqStatus.flag === true
        ) {
          reqStatus.flag = false;
        }
      });

      await teacherToUpdate.save();
    }
  }else{
    
  }
  } catch (error) {
    console.error('Error updating flag for requested teachers:', error.message);
    throw new Error('Failed to update flag for requested teachers');
  }
};

module.exports = {
  updateTeacherStatus,
};
