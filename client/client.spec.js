'use strict'

/* eslint-disable prefer-arrow-callback */
const chai = require('chai');
const provider = require('./expectation/provider');
const client = require('./client');
const interactions = require('./expectation/interactions');
const expect = chai.expect;

describe('product handling', () => {

  before(async function () {
  this.timeout(10000) // it takes time to start the mock server
    await provider.setup();
  });

  after(async function () {
    this.timeout(10000) // it takes time to stop the mock server and gather the contracts
    await provider.finalize();
  })

  describe('#getReportHTML', () => {
    it('should return html report', async function () {
      await provider.addInteraction(interactions.getCorrectID)
      const response = await client.getReportHTML({
        'format': 'html'
      });
      expect(response.statusMessage).to.be.equal('OK');
      await provider.verify();
    })
  });
});
