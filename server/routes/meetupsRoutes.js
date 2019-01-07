import express from 'express';
import meetups from '../controllers/meetupsControllers';

const router = express.Router();

router.post('/', meetups.createMeetup);
router.get('/', meetups.findAll);
router.get('/:meetupId', meetups.findOne);
router.get('/upcoming', meetups.allUpcomings);

console.log('welocmer');
export default router;
