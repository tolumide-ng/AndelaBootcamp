import express from 'express';
import questionControllers from '../controllers/questionsControllers';

const router = express.Router();

router.post('/', questionControllers.createQuestion);
router.patch('/:questionId/upvote', questionControllers.upvote);
router.patch('/:questionId/downvote', questionControllers.downvote);

export default router;
