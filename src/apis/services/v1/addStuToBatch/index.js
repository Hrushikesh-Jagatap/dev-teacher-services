const Batch = require('@models/Batch');
const TeacherData = require('@models/Teacher');

// add  Student To Batch Service
const addToBatch = async (userId, data) => {

    try {
        const studentIdToAdd = data.student_userId
        const teacherIdToAdd = data.teacherId
        // const user = await TeacherData.findOne({ userId: userId });

        // if (user === null) {
        //     return {
        //         status: 404,
        //         message: 'TEACHER_NOT_FOUND',
        //     };
        // }


        const { batch_id } = data;

        const batch = await Batch.findOne({ batch_id: batch_id });


        if (batch === null) {
            return {
                status: 404,
                message: 'TEACHER_NOT_FOUND',
            };
        }

        if (batch.student_userId.includes(studentIdToAdd)) {
            // return ('Invalid student ID or student already in the batch');
        }
        // Add the student to the batch
        batch.student_userId.push(...studentIdToAdd);


            if (batch.teacherId.includes(teacherIdToAdd)) {
            // return ('Invalid student ID or student already in the batch');
        }
        // Add the student to the batch
        batch.teacherId.push(...teacherIdToAdd);

        await batch.save();

        return { studentIdToAdd ,teacherIdToAdd};

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add student to the batch' });
    }
};

module.exports = {
    addToBatch,
};
