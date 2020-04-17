const axios = require('axios');
const formId = 501822;

require('dotenv').config();

axios.defaults.baseURL = 'https://api.ona.io/api/v1';
axios.defaults.headers.common['Authorization'] = `Token ${process.env.ONA_API_KEY}`;

async function getForm() {
    try {
        return await axios.get(`forms/${formId}`);
    } catch(error) {
        console.error(error)
    }
}

async function getData() {
    try {
        return await axios.get(`data/${formId}`)
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getForm,
    getData
}