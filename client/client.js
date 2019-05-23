'use strict'

const request = require('request-promise-native');
const REPORT_SERVICE_URL ='http://localhost:5000'
const entity = '589fc7a3-902d-5142-d497-b594d893e1b4';

function getReportHTML(query) {
  return request.get({
    url: `${REPORT_SERVICE_URL}/report/report.frx/bpmn-diagram/${entity}?`,
    qs: query,
    resolveWithFullResponse: true
  })
}

module.exports = {
  getReportHTML
}
