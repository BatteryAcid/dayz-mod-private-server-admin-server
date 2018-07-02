import { Router } from 'express';
import * as controller from './characterData.controller';

let router = Router();

router.route('/')
   .get(controller.get)
   .post(controller.post);

router.route('/:id')
   .get(controller.getById)
   .put(controller.put)
   .delete(controller.remove);

export let characterDataRouter = router;
