import { Request, Router, Response } from 'express';
import TeamController from '../controllers/team.controller';

const teamController = new TeamController();

const router = Router();

router.get('/', (req: Request, res: Response) => teamController.getAllTeams(req, res));

router.get('/:id', (req, res) => teamController.getTeamsById(req, res));

export default router;
