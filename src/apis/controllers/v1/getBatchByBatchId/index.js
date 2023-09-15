const BatchService = require('@services/v1/getBatchByBatchId');

// Controller function to get a single teacher by ID
const getBatchByBatchId = async (req, res) => {
    try {
        const batch = await BatchService.getBatchByBatchId(req.params.id);
        const result = {
            data: null,
            success: false,
            error: 'Error in Finding  Btach By BatchId',
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
    getBatchByBatchId
}  