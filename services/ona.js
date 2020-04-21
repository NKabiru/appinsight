const axios = require('axios');
const formId = 501822;

require('dotenv').config();

axios.defaults.baseURL = 'https://api.ona.io/api/v1';
axios.defaults.headers.common['Authorization'] = `Token ${process.env.ONA_API_KEY}`;

async function getData() {
    return await axios.get(`data/${formId}`)
}

async function aggregate() {
     const data = await getData();
}

module.exports = {
    getData
}