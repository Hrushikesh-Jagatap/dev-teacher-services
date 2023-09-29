const Teacher = require('@models/Teacher');

const searchTeacher = async (query) => {
    try {
        const { subject, lang, className, mode } = query;

        const filter = {};

        if (subject) filter["subjects_taught.subject"] = subject;
        if (className) filter["subjects_taught.class"] = className;
        if (mode) filter["teaching_mode"] = mode;
        if (lang) filter["teaching_languages"] = { $in: [lang] };

        const results = await Teacher.find(filter).exec();

        return results;
    } catch (error) {
        throw new Error('Failed to get teachers');
    }
};

module.exports = {
    searchTeacher,
};
