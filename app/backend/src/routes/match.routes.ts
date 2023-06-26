import { Request, Router, Response } from 'express';
import MatchController from '../controllers/match.controller';
import middleware from '../middleware/validation.middleware';

const matchController = new MatchController();

const router = Router();

router.patch('/:id', middleware.validateToken, (req, res) =>
  matchController.matchUpdate(req, res));

router.patch(
  '/:id/finish',
  middleware.validateToken,
  (req: Request, res: Response) => matchController.matchFinish(req, res),
);

router.get('/', (req: Request, res: Response) => matchController.getAll(req, res));

router.post('/', middleware.validateToken, middleware.validateMatch, (req, res) =>
  matchController.matchCreate(req, res));

export default router;
