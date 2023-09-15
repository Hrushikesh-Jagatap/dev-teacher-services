
const BatchService = require('@services/v1/getBatchByTeacherId')

// Controller function to get a single batch by  teacherid
const getBatchByTeacherId = async (req, res) => {
    try {
        const batch = await BatchService.getBatchByTeacherId(req.params.Id);
        const result = {
            data: null,
            success: false,
            error: 'Error in Finding  Btach By TeacherId',
        }
        if (!batch) {
            res.result;
        }
        result.data = batch;
        result.success = true;
        return result;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getBatchByTeacherId
}  