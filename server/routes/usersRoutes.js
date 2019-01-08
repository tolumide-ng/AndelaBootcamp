import express from 'express';
import users from '../controllers/usersControllers';
const router = express.Router();

router.post('/', users.signup);


export default router;
