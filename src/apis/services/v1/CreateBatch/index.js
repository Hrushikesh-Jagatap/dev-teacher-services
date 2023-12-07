//  Batch model
const Batch = require('@models/Batch');

const { createUUID } = require('@common/libs/UUID/UUIDV4');

const { addBatchDetails } = require('@services/v1/UpdateTeacherById')

const {  pushNotification } = require('@services/v1/Notification')


// Create multiple batches
const createBatches = async (batchData) => {
  try {
    const batch_id = `BATCH_${createUUID()}`;

    batchData.batch_id = batch_id;

    const { teacherId, createruserId } = batchData;


    const Batchdata = {
      batch_id: batchData.batch_id,
      batch_name: batchData.batch_name,
      batch_class: batchData.className,
    };

    const addBatchDetailToTeacher = await addBatchDetails(teacherId, Batchdata,batchData)

    if(addBatchDetailToTeacher === 'Error') {
      return {
        status: 404,
        message: 'Error while updating Batch Details in Teacher',
      };
    }

    const createdBatches = await Batch.create(batchData);

    if (createdBatches === null) {
      return {
        status: 404,
        message: 'ERROR_WHILE_CREATING_BATCH',
      };
    }
       const userId = teacherId[0];
  //     const NotificationData = {
  //     userId: userId,
  //     appName: 'teacherApp',
  //     data: {
  //       message: `Your ${batch_name} has been created`
  //     },
  //     body: 'Your Batch is Created',
  //     title: 'Your Batch is Created'

  //   }

  //   if (userId !== createruserId) {
  //     const sendNotificationToTeacher = await pushNotification(NotificationData);
  // }


    return createdBatches;

  } catch (error) {
    throw new Error('Failed to create batches');
  }
};

module.exports = {
  createBatches,
};
