import express from 'express';
import questionControllers from '../controllers/questionsControllers';

const router = express.Router();

router.post('/', questionControllers.createQuestion);
router.patch('/:questionId/upvote', questions.upvote);
router.patch('/:questionId/downvote', questions.downvote);

export default router;
