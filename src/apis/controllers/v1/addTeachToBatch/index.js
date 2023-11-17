const BatchService = require('@root/src/apis/services/v1/addTeachToBatch');

const { HttpResponseHandler } = require('intelli-utility');

//  add Batch To Student  controller
const addToBatch = async (req, res, next) => {

    const userId = req.params.userId;

    const { teacherId, batch_id } = req.body;

    try {

        const addToBatch = await BatchService.addToBatch(userId, req.body);
        
        return HttpResponseHandler.success(req, res, addToBatch);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    addToBatch,
};
