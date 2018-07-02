//All api routers will be registered here
import { Router } from 'express';
import { playersRouter } from './players/players.router';
import { characterDataRouter } from './characterData/characterData.router';

let router = Router();
router.use('/players', playersRouter);
router.use('/characterData', characterDataRouter);

export let apiRouter = router;
