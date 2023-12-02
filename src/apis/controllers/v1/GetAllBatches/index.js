const Getallbatch = require('@services/v1/GetAllBatches');
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to get a single batch by userID
const Getallbatches = async (req, res, next) => {
    try {
        const batch = await Getallbatch.getall();
        
        if (!batch) {
            return HttpResponseHandler.success(req, res, batch);
        }
        return HttpResponseHandler.success(req, res, batch);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    Getallbatches
}  
