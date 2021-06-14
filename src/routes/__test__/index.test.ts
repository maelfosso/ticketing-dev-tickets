import { request } from 'express';
import supertest from 'supertest';
import { app } from '../../app';

const http = supertest(app);

it('can fetch a list of tickets', async () => {

  await http
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title: 'weeawalkjwfea',
      price: 20
    });
  await http
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title: 'wenpwpoiewassefs',
      price: 40
    });
  await http
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title: 'iwejfawlkse',
      price: 20
    });
  
  const response = await http
    .get('/api/tickets')
    .send()
    .expect(200);
  
  expect(response.body.length).toEqual(3);
})
