'use strict'

const pact = require('@pact-foundation/pact-node')

const opts = {
  providerBaseUrl: 'http://localhost:3010', // where your service will be running during the test, either staging or localhost on CI
  pactUrls: ['http://localhost:8080/pacts/provider/Bpmn-diagramService/consumer/ReportService/latest'], // the pacts to test against
  publishVerificationResult: true,
  providerVersion: '1.0.0'
}

pact.verifyPacts(opts).then(() => {
  console.log('success')
  process.exit(0)
}).catch((error) => {
  console.log('failed', error)
  process.exit(1)
})
