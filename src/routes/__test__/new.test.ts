import { request } from "express";
import supertest from "supertest";
import { app } from '../../app';

const http = supertest(app);

it('has a route handler listening to /api/tickets/ for post requests', async () => {
  const response = await http
    .post('/api/tickets')
    .send({});
  
  expect(response.status).not.toEqual(404);
});

it('can only be accessed if the user is signed in', async () => {
  await http.post('/api/tickets').send({}).expect(401);
});

it ('returns status other than 401 if the user is signed in', async () => {
  const response = await http
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({});
  
  expect(response.status).not.toEqual(401);
});

it('returns an error if an invalid title is provided', async () => {
  await http
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title: '',
      price: 10
    })
    .expect(400);

  await http
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      price: 10
    })
    .expect(400);
});

it('return an error if an invalid price is provided', async () => {
  await http
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title: 'asjiowkefw',
      price: -10
    })
    .expect(400);

  await http
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title: 'wopawefa joiwe'
    })
    .expect(400);
});

it('created a ticket with valid inputs', async () => {
  
});

