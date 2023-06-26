import { Router } from 'express';
import teamRouter from './team.routes';
import matchRouter from './match.routes';
import loginRouter from './user.routes';

const router = Router();

router.use('/teams', teamRouter);
router.use('/matches', matchRouter);
router.use('/login', loginRouter);

export default router;
