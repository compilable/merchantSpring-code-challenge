const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
const app = require('./index')

import { getOverdueOrders } from "./sales";

describe('Unit testing the /home route', function() {

  it('should return OK status', function() {
    return request(app)
      .get('/user')
      .then(function(response:any){
          assert.equal(response.status, 200)
      })
  });
});

beforeAll(done => {
  done()
})
afterAll(done => {
  done()
})