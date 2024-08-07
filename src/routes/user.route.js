import { Router } from 'express';

import { UserController } from '../controllers/user.controller.js';

const router = Router();

router.route('/:id')
    .get(UserController.GetById)
    .delete(UserController.DeleteById);

router.route('/')
    .get(UserController.Get)
    .post(UserController.Create);

export { router as userRouter };
