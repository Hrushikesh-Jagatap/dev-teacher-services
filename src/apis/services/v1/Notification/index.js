const { loadBalancer, message } = require('@config');
const { RequestHandler } = require('intelli-utility');

const pushNotification = async (data) => {
    try {
        const url = `${message}/ums/apis/v1/notification/push`;
        const { data: response } = await RequestHandler.post({ url, data });
        return response
    } catch (error) {
        throw new Error;
    }
};

module.exports = {
    pushNotification
}
