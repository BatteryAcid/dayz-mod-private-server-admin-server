import { Router } from 'express';
import { controller } from './players.controller';

//let router = Router();
let router = Router();

router.route('/')
    .get(controller.get)
    .post(controller.post);

router.route('/:id')
    .get(controller.getById)
    .put(controller.put)
    .delete(controller.delete);


export let playersRouter = router;
