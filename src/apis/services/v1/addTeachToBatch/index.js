const Batch = require('@models/Batch');

const TeacherData = require('@models/Teacher');

const addToBatch = async (createruserId, data) => {
    try {
        const user = await Batch.findOne({ userId: createruserId });

        if (user === null) {
            return {
                status: 404,
                message: 'TEACHER_NOT_FOUND',
            };
        }

        const { batch_id, teacherId } = data;

        const batch = await Batch.findOne({ batch_id });

        if (!batch) {
            return {
                status: 404,
                message: 'BATCH_NOT_FOUND',
            };
        }

        if (batch.teacherId.includes(teacherId)) {
            return 'Invalid teacher ID or teacher already in the batch';
        }

        batch.teacherId.push(teacherId);

        await batch.save();

        return { teacherIdToAdd: teacherId };
    } catch (error) {
        console.error(error);
        throw new Error('Failed to add teacher to the batch');
    }
};

module.exports = {
    addToBatch,
};
