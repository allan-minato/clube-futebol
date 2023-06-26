import { Router } from 'express';
import LeaderBoardController from '../controllers/leaderboard.controller';

const leaderBoardController = new LeaderBoardController();

const router = Router();

router.get('/home', (req, res) => leaderBoardController.leaderboardCreate(req, res));

export default router;
