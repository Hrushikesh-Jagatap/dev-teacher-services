const TeacherService = require('@services//v1/serachbystatus');
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to get a single teacher by userID
const getBystatus = async (req, res,next) => {
    try {
        const teacher = await TeacherService.getUserById(req.params.id);
      
        if (!teacher) {
           return HttpResponseHandler.success(req, res, "No teachers found.");
        }
     
 return HttpResponseHandler.success(req, res, teacher);
    } catch (error) {
       next(error);
    }
};

module.exports = {
    getBystatus
}  