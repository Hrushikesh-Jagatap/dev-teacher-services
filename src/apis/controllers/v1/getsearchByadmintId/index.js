const Data = require('@services/v1/getsearchByadmintId');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to get a single batch by  student ID
const getBatchByadminId = async (req, res, next) => {
    try {
        const Admin = await Data.getBatchByadminId(req.params.id);
        if (!Admin) {
            return HttpResponseHandler.success(req, res, Admin);
        }
        return HttpResponseHandler.success(req, res, Admin);
        
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getBatchByadminId
}  
