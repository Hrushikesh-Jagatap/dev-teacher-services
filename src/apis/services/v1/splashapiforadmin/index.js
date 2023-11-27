
const TeacherData = require('@models/Teacher');
const BatchData = require('@models/Batch');
const AppVersion = require('@models/AppVersion');

const getSplashData = async () => {
  let teacheridonline = [];
  let studentidonline = [];
  
  let uniqueTeacherIds;
  let uniqueStudentIds;
  const onlinebatches = await BatchData.find({ mode: "online" });

  for (let i = 0; i < onlinebatches.length; i++) {
  // onlinebatches[i].teacherId.flat();
   
    teacheridonline.push(onlinebatches[i].teacherId);


    console.log(onlinebatches[i].student.length);
    for(let j = 0; j < onlinebatches[i].student.length; j++)
    studentidonline.push(onlinebatches[i].student[j].student_userId);
  }
  // console.log(teacherid); 

  // // Use Set to remove duplicates
  uniqueTeacherIds = [...new Set(teacheridonline)];
// console.log(uniqueTeacherIds); 

  // console.log(uniqueTeacherIds.flat()); // or console.log([].concat(...uniqueTeacherIds));
  let a=uniqueTeacherIds.flat();
   uniqueTeacherIds = [...new Set(a)];
  console.log(uniqueTeacherIds.length);
let onlineteacher=uniqueTeacherIds.length;



uniqueStudentIds = [...new Set(studentidonline)];
let b=uniqueStudentIds.flat();

   uniqueStudentIds = [...new Set(b)];
// uniqueStudentIds =[...new set(b)];
 console.log(uniqueStudentIds.length); 
let onlinestudnet=uniqueStudentIds.length;







let teacheroffline = [];

let studentidoffline = [];
 const offlinebatches = await BatchData.find({ mode: "offline" });



  for (let i = 0; i < offlinebatches.length; i++) {
  // onlinebatches[i].teacherId.flat();
   
    teacheroffline.push(offlinebatches[i].teacherId);


        console.log(offlinebatches[i].student.length);
    for(let j = 0; j < offlinebatches[i].student.length; j++){
    studentidoffline.push(offlinebatches[i].student[j].student_userId);
  }

  }


    uniqueTeacherIds = [...new Set(teacheroffline)];
// console.log(uniqueTeacherIds); 

  // console.log(uniqueTeacherIds.flat()); // or console.log([].concat(...uniqueTeacherIds));
  let a1=uniqueTeacherIds.flat();
   uniqueTeacherIds = [...new Set(a1)];
  console.log(uniqueTeacherIds.length);
let offlineteacher=uniqueTeacherIds.length;


 uniqueStudentIds = [...new Set(studentidoffline)];
// console.log(uniqueTeacherIds); 

  // console.log(uniqueTeacherIds.flat()); // or console.log([].concat(...uniqueTeacherIds));
  let b1=uniqueStudentIds.flat();
   uniqueStudentIds = [...new Set(b1)];
  console.log(uniqueStudentIds.length);
let offlinestduent=uniqueStudentIds.length;


// const offlinebatchesforstudent = await BatchData.find({ mode: "offline" });


let data={onlineteacher,offlineteacher,onlinestudnet,offlinestduent}

  return data;
}

module.exports = {
  getSplashData
};
