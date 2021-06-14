import supertest from 'supertest';
import mongoose from 'mongoose';
import { app } from '../../app';

const http = supertest(app);

it('returns 401 if the user is not signed in', async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  await http
    .put(`/api/tickets/${id}`)
    .send({
      title: 'aslkfwe',
      price: 20
    })
    .expect(401);
});

it ('returns a 401 if user does not own the ticket', async () => {
  const response = await http
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title: 'aslkdw',
      price: 20
    });

  await http
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie',global.signin())
    .send({
      title: 'pqouresw',
      price: 40
    })
    .expect(401);
});

it ('returns 400 if the user provides an invalid title or price', async () => {
  const cookie = global.signin();

  const response = await http
    .post('/api/tickets')
    .set('Cookie', cookie)
    .send({
      title: 'aslkdw',
      price: 20
    });

  await http
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: '',
      price: 20
    })
    .expect(400);

  await http
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', cookie)
    .send({
      title: 'ijepourwa',
      price: -20
    })
    .expect(400);
});

it ('updates the ticket provided valid inputs', async () => {

});
