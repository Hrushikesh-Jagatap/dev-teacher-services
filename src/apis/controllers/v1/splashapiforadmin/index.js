const TeacherService = require('@services/v1/splashapiforadmin');

const { HttpResponseHandler } = require('intelli-utility');


const getSplash = async (req, res,next) => {
  try {
    const data = await TeacherService.getSplashData();

    if (!data) {
      return HttpResponseHandler.success(req, res, data);
    }
    return HttpResponseHandler.success(req, res, data);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSplash
}  