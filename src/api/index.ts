//All api routers will be registered here
import { Router } from 'express';
import { playersRouter } from './players/players.router';
import { characterDataRouter } from './characterData/characterData.router';
import { objectDataRouter } from './objectData/objectData.router';

let router = Router();
router.use('/players', playersRouter);
router.use('/characterData', characterDataRouter);
router.use('/objectData', objectDataRouter);

export let apiRouter = router;
