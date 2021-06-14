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
  
});

it('return an error if an invalid price is provided', async () => {
  
});

it('created a ticket with valid inputs', async () => {
  
});

