const TeacherData = require('@models/Teacher');
const { loadBalancer, SYSTEM_TOKEN } = require('@config');
const axios = require('axios');

const updateTeacherStatus = async (teacherId, teacherData) => {
  try {
    const teacher = await TeacherData.findOne({ teacher_id: teacherId });

    if (!teacher) {
      throw new Error('Teacher not found');
    }

    const { sid, status, about } = teacherData;
    let existingStatus = teacher.req_status.find((reqStatus) => reqStatus.sid == sid);


















    if (existingStatus) {
      existingStatus.status = status;
      existingStatus.about = about;


    } else {
      teacher.req_status.push({ sid, status, about });
    }

    const updatedTeacher = await teacher.save();

    if (status !== "requested") {
      const config = {
        method: 'put',
        url: `${loadBalancer}/sts/apis/v1/status/${sid}`,
        headers: {
          app_name: 'teacherApp',
          app_version_code: '101',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SYSTEM_TOKEN}`,
        },
        data: {
          tid: teacherId,
          status: status,
          about: about,
        },
      };

      const teacherUpdateResult = await axios(config);
      console.log('Teacher status updated:', teacherUpdateResult.data);
    }

    return updatedTeacher;
  } catch (error) {
    console.error('Error updating teacher status:', error.message);
    throw new Error('Failed to update teacher');
  }
};

module.exports = {
  updateTeacherStatus,
};
