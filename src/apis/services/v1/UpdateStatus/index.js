const TeacherData = require('@models/Teacher');
const { loadBalancer, SYSTEM_TOKEN } = require('@config');
const axios = require('axios');

const updateTeacherStatus = async (teacherId, teacherData) => {
  try {
    const teacher = await TeacherData.findOne({ teacher_id: teacherId });

    if (!teacher) {
      throw new Error('Teacher not found');
    }

    const { sid, status, about , subject, flag,classes } = teacherData;
    let existingStatus = teacher.req_status.find((reqStatus) => reqStatus.sid == sid);

















    
    if (existingStatus) {
      existingStatus.status = status;
     // existingStatus.about = about;

    
    } else {
      teacher.req_status.push({ sid, status, about, subject, flag,classes  });
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
          subject:subject,
          classes:classes,
          flag:flag,
        },
      };

      const teacherUpdateResult = await axios(config);
    //  console.log('Teacher status updated:', teacherUpdateResult.data);
    }

//       if (status == "Accepted") {


//          let findteacher=await TeacherData.findOne({"req_status.sid":sid})

// console.log(findteacher)
//     let size=await TeacherData.countDocuments({"req_status.sid":sid})
//     for(let i=0; i<size; i++) {
       
//      if(findteacher.req_status[i].status=="requested" && findteacher.req_status[i].subject==subject &&  findteacher.req_status[i].classes==classes &&  findteacher.req_status[i].sid==sid){
//       // if(flag==true){
//         findteacher.req_status[i].flag=false;
//         //  flag="false";

//       // }    
    
//       const abc=await findteacher.save();
//        console.log(abc)
 

//      }
//     }
//       }
 if (status === 'Accepted') {
      let findteacher = await TeacherData.findOne({ 'req_status.sid': sid });

      console.log(findteacher);

      if (findteacher) {
        const size = findteacher.req_status.length;
        for (let i = 0; i < size; i++) {
          if (
            findteacher.req_status[i].status === 'requested' &&
            findteacher.req_status[i].subject === subject &&
            findteacher.req_status[i].classes === classes &&
            findteacher.req_status[i].sid === sid
          ) {
            findteacher.req_status[i].flag = false;

            const updatedTeacherStatus = await findteacher.save();
            console.log(updatedTeacherStatus);
          }
        }
      }
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
