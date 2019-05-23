'use strict'
const entityId = "589fc7a3-902d-5142-d497-b594d893e1b4";

module.exports = {
  getCorrectID: {
    state: 'it has a correct bpmn-diagram id',
    uponReceiving: 'return id bpmn diagram',
    withRequest: {
      method: 'GET',
      path: "/" + entityId
    },
    willRespondWith: {
      status: 200,
      body: {
        "caption":"New process (1)","elements":{},"connections":{},"labels":{},"documentation":"",
        "securityTags":["8f34a13c-afeb-4c07-801d-abe49725fd95","1e3ef793-5076-43ac-a376-ce7184a15334"],
        "id":"589fc7a3-902d-5142-d497-b594d893e1b4"
      }
    }
  }
}
