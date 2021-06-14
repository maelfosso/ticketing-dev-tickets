import express, { Request, Response } from 'express';
import { requireAuth } from '@mfticketing/common';

const router = express.Router();

router.post('/api/tickets', requireAuth, (req: Request, res: Response) => {
  res.status(200).json({});
});

export { router as createTicketRouter };
