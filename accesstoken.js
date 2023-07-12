const axios = require('axios')
const clientId = ""
const clientSecret = ""

async function getAcessToken() {
    const url = `https://login.microsoftonline.com/${tenantID}/oauth2/token`
    const identify = '499b84ac -1321 -427f -aa17 -267ca6975798'
    const data = `grand_type=client_credentials$client_id=${clientId}&client_secret=${clientSecret}&resource=${identify}`;

    try {
        const response = await axios.post(url, data);
        const accessToken = response.data.acess_token;
        return accessToken

    } catch (error) {
        console.error('Error 401 - Unauthorized', error);
        throw error;
    }
}