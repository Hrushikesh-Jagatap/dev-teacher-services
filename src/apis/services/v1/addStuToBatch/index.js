const Batch = require('@models/Batch');
const { getUserById } = require('@services/v1/GetByUserId');

const addToBatch = async (userId, data) => {
    try {
        const { student_userId, name, profileimage, batch_id } = data;

        // const user = await getUserById(userId);
        // if (!user) {
        //     return {
        //         status: 404,
        //         message: 'TEACHER_NOT_FOUND',
        //     };
        // }

        const batch = await Batch.findOne({ batch_id: batch_id });
        if (!batch) {
            return {
                status: 404,
                message: 'BATCH_NOT_FOUND',
            };
        }

        if (!batch.student) {
            batch.student = []; // Initialize students as an empty array if it's undefined
        }

        const existingStudent = batch.student.find(student => student.student_userId === student_userId);
        if (existingStudent) {
            return {
                status: 400,
                message: 'STUDENT_ALREADY_ADDED',
            };
        }

        batch.student.push({ student_userId, name, profileimage });
        await batch.save();
        return { student_userId, name, profileimage  };
    } catch (error) {
        console.error(error);
        throw new Error('Failed to add student to the batch');
    }
};

module.exports = {
    addToBatch,
};