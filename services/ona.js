const axios = require('axios')
const d3 = require('d3-array')
const formId = 501822

require('dotenv').config()

axios.defaults.baseURL = 'https://api.ona.io/api/v1'
axios.defaults.headers.common['Authorization'] = `Token ${process.env.ONA_API_KEY}`

async function getData() {
  return (await axios.get(`data/${formId}`)).data
}

async function aggregate() {
    const data = await getData()
    const oses = data.reduce(($carry, $item) => $carry.concat(' ', $item['What_os_do_you_currently_use']).trim(), '').split(' ')
    let osCount = new Map()

    oses.forEach(item => {
      osCount.set(item, osCount.get(item) ? osCount.get(item) + 1 : 1)
    })

    return {
      browsers: d3.rollup(data, v => v.length, d => d['Primary_Browser']),
      todos: d3.rollup(data, v => v.length, d => d['To_Do_Lists']),
      officeSuites: d3.rollup(data, v => v.length, d => d['Office_Suite']),
      cloudStorage: d3.rollup(data, v => v.length, d => d['Cloud_Storage']),
      textEditors: d3.rollup(data, v => v.length, d => d['Preferred_Text_Editor']),
      mailReaders: d3.rollup(data, v => v.length, d => d['Mail_Reader_Viewer']),
      oses: osCount
    }
}

module.exports = {
  aggregate,
}
