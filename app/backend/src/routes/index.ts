import { Router } from 'express';
import teamRouter from './team.routes';
import matchRouter from './match.routes';
import loginRouter from './user.routes';
import leaderboard from './leaderboard.routes';

const router = Router();

router.use('/teams', teamRouter);
router.use('/matches', matchRouter);
router.use('/login', loginRouter);
router.use('/leaderboard', leaderboard);

export default router;
