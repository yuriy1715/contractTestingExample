const pact = require('@pact-foundation/pact-node');
const path = require('path');

pact.publishPacts({
  pactFilesOrDirs: [
    path.resolve(__dirname, '../../pacts/'),
  ],
  pactBroker: 'http://localhost:8080',
  consumerVersion: '1.0.0',
  tags: '123'
  
}).then(() => {
  console.log(`Pact contract successfully published. Head over to http://localhost:8080`);
}).catch(err => {
  console.log('Pact contract not published: ', err);
});