//All api routers will be registered here
import { Router } from 'express';
import { playersRouter } from './players/players.router';


let router = Router();
router.use('/players', playersRouter);

export let apiRouter = router;
