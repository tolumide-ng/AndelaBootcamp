import express from 'express';
import meetups from '../controllers/meetupsControllers';

const router = express.Router();

router.post('/', meetups.createMeetup);
console.log('welocmer');
export default router;
