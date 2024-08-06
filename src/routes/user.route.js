import { Router } from 'express';

import { UserController } from '../controllers/user.controller.js';

const router = Router();

router.get('/', UserController.Get);
router.post('/', UserController.Create);

export { router as userRouter };
