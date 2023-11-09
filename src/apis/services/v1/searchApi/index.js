const TeacherData = require('@models/Teacher');

const searchTeacher = async (query) => {
  try {
    const { mode, subject, className, lang } = query;

    const filter = {};

  if (mode && Array.isArray(mode) && mode.length > 0) {
  filter["teachingDetails.teaching_mode"] = mode;
}

    if (subject) {
      filter["teachingDetails.subjects_taught.subject"] = new RegExp(subject, 'i');
    }

    if (className) {
      filter["teachingDetails.subjects_taught.class"] = new RegExp(className, 'i');
    }

    if (lang) {
      filter["educationDetails.teaching_languages"] = new RegExp(lang, 'i');
    }

    const results = await TeacherData.find(filter)
      .select("userId  personalDetails teachingDetails educationDetails OnlieTeachingDeatis OfflineTeachingDeatis")
      .lean().exec();

      if (results === null) {
        return {
          status: 404,
          message: 'NO_TEACHER_FOUND',
        };
      }
  
    return results;
  } catch (error) {
    throw new Error('Failed to find teachers');
  }
};

module.exports = {
  searchTeacher,
};
