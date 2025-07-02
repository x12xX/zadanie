const request = require('supertest');
const app = require('../app');

describe('Todo App API', () => {
  it('GET /todos should return empty array', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /todos should add a new task', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ task: 'Zadanie 1' });
    expect(res.statusCode).toBe(201);
  });
});