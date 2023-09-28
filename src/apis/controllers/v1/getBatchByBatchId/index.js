const BatchService = require('@services/v1/getBatchByBatchId');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a single Batch by ID
const getBatchByBatchId = async (req, res, next) => {
    try {
        const batch = await BatchService.getBatchByBatchId(req.params.id);

        if (!batch) {
            return HttpResponseHandler.success(req, res, batch);
        }
        return HttpResponseHandler.success(req, res, batch);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getBatchByBatchId
}  