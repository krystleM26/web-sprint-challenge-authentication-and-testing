// Write your tests here
const db = require('../data/dbConfig')
const server = require('./server')
const request = require('supertest')

beforeAll(async () => {
 await db.migrate.rollback();
 await db.migrate.latest();

})

afterAll(async () => {
  await db.destroy()
})
test('sanity', () => {
  expect(1).toBe(1)
})

test('[Get] all jokes', async () => {
  const res = await request(server).get('/api/jokes')
  expect(res.status).toBe(200);
  // expect(res.body).toEqual([]);
  
})