const BatchService = require('@services/v1/getBatchByStudentId');

// Controller function to get a single batch by  student ID
const getBatchByStudentId = async (req, res) => {
    try {
        const student = await BatchService.getBatchByStudentId(req.params.id);
        const result = {
            data: null,
            success: false,
            error: 'Error in Finding  Btach By TeacherId',
        }
        if (!student) {
            res.result;
        }
        result.data = student;
        result.success = true;
        return result;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getBatchByStudentId
}  