const sessionDb = require('@models/Session');
const { createUUID } = require('@common/libs/UUID/UUIDV4');
const { addSessionToChapter } = require('@services/v1/updateChapter');

// Service function to create a new session in a chapter
const createSession = async (sessionData) => {
    try {
        const session_id = `SESSION_${createUUID()}`;
        sessionData.session_id = session_id;
        const { chapter_id } = sessionData;
        const updateChapter = await addSessionToChapter(chapter_id, session_id);

        if (updateChapter === 'Chapter not found') {
            return {
                status: 404,
                message: 'Error while updating sessionId in chapter',
            };
        }

        const mettingUrl = `https://myeduc.ddns.net/${session_id}`;

        // Add the meetingUrl to the sessionData
        sessionData.mettingUrl = mettingUrl;

        console.log("++++++++++++", sessionData);

        const newSession = await sessionDb.create(sessionData);

        console.log('++++++++++++++++', newSession);
        
        return newSession;

    } catch (error) {
        throw new Error('Failed to create a new Session for the chapter');
    }
};

module.exports = {
    createSession
};
