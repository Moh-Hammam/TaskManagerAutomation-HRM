const request = require('supertest');
const express = require('express');
const app = require('./server'); // Export your app instance in server.js

describe('API Tests', () => {
  it('POST /login - valid credentials', async () => {
    const res = await request(app).post('/login').send({ username: 'admin', password: 'admin' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.token).toBeDefined();
  });

  it('POST /login - invalid credentials', async () => {
    const res = await request(app).post('/login').send({ username: 'bad', password: 'bad' });
    expect(res.statusCode).toEqual(401);
  });

  it('POST /tasks', async () => {
    const res = await request(app).post('/tasks').send({ title: 'API Task' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toEqual('API Task');
  });

  it('GET /tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('PUT /tasks/:id', async () => {
    const task = await request(app).post('/tasks').send({ title: 'Temp Task' });
    const res = await request(app).put(`/tasks/${task.body.id}`).send({ title: 'Updated' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual('Updated');
  });

  it('DELETE /tasks/:id', async () => {
    const task = await request(app).post('/tasks').send({ title: 'Delete Me' });
    const res = await request(app).delete(`/tasks/${task.body.id}`);
    expect(res.statusCode).toEqual(204);
  });
});
