import { Router } from 'express';

import { UserController } from '../controllers/user.controller.js';

const router = Router();

router.get('/:id', UserController.GetById);
router.route('/')
    .get(UserController.Get)
    .post(UserController.Create);

export { router as userRouter };
