const TeacherData = require('@models/Teacher');
const BatchData = require('@models/Batch');
const AppVersion = require('@models/AppVersion');


const getSplashData = async () => {
  
    const batches= await Batch.find({});
    console.log(batches)
return batches
}

module.exports = {
  getSplashData
};

