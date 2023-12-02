
const BatchService = require('@services/v1/getBatchByAdminid')
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to get a single batch by  teacherid
const getBatchAdminid = async (req, res, next) => {
    try {
        const batch = await BatchService.getBatchAdminid(req.params.Id);
        if (!batch) {
            return HttpResponseHandler.success(req, res, batch);
        }
        return HttpResponseHandler.success(req, res, batch);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    getBatchAdminid
}  
