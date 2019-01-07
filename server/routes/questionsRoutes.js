import express from 'express';
import questionControllers from '../controllers/questionsControllers';

const router = express.Router();

router.post('/', questionControllers.createQuestion);

export default router;
