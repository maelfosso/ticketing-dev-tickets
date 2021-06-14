import supertest from 'supertest';
import { app } from '../../app';

const http = supertest(app);

it ('returns a 404 if the ticket is not found', async () => {
  await http
    .get('/api/tickets/lasjweoiwefakjpo')
    .send()
    .expect(404);
});

it ('returns the ticket if the ticket is found', async () => {
  const title = 'concert';
  const price = 20;

  const response = await http
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title,
      price,
    });

  expect(response.status).toEqual(201);

  const ticketResponse = await http
    .get(`/api/tickets/${response.body.id}`)
    .send()
    .expect(200)
  ;
  expect(ticketResponse.body.title).toEqual(title);
  expect(ticketResponse.body.price).toEqual(price);
});
