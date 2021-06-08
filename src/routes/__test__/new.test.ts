import supertest from "supertest";
import { app } from '../../app';

const http = supertest(app);

it('has a route handler listening to /api/tickets/ for post requests', async () => {
  // const response = await(request)
});

it('can only be accessed if the user is signed in', async () => {
  
});

it('returns an error if an invalid title is provided', async () => {
  
});

it('return an error if an invalid price is provided', async () => {
  
});

it('created a ticket with valid inputs', async () => {
  
});

