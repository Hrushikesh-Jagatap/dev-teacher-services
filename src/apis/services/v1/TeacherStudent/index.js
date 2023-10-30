const TeacherData = require('@models/Teacher');
const { loadBalancer, SYSTEM_TOKEN } = require('@config');
const axios = require('axios');

const getAllStudentDetails = async (teacherUserId) => {
  try {
    // Find the teacher by userId.
    const teacher = await TeacherData.findOne({ userId: teacherUserId });

    if (!teacher) {
      // If the teacher is not found, return a 404 response.
      return {
        status: 404,
        message: 'TEACHER_NOT_FOUND',
      };
    }

    const studentUserIds = teacher?.student_userId || [];

    // Ensure that the studentUserIds array is not empty and contains objects with details.
    if (studentUserIds.length === 0 || !studentUserIds.every(student => student.student_userId)) {
      throw new Error('Invalid student_userId data');
    }

    // Return the list of student details.
    return studentUserIds;
  } catch (error) {
    // Handle errors and throw a custom error if needed.
    throw new Error('Failed to get student details: ' + error.message);
  }
};


// // Function to get student profiles using Axios
// const getStudentProfiles = async (userIds) => {
//   try {
//     const config = {
//       method: 'get',
//       url: `${loadBalancer}/sts/apis/v1/user/${userIds.join(',')}`, // Pass the array of user IDs
//       headers: {
//         app_name: 'studentApp',
//         app_version_code: '101',
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${SYSTEM_TOKEN}`,
//       },
//     };

//     const response = await axios(config);
//     const studentProfiles = response.data;

//     return studentProfiles;
//   } catch (error) {
//     throw new Error('Failed to get student profiles');
//   }
// };

module.exports = {
  getAllStudentDetails,
};
