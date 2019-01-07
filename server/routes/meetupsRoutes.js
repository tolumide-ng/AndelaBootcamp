import express from 'express';
import meetups from '../controllers/meetupsControllers';

const router = express.Router();

router.post('/', meetups.createMeetup);
router.get('/', meetups.findAll);
router.get('/:meetupId', meetups.findOne);

console.log('welocmer');
export default router;
