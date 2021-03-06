import express from 'express';
import meetups from '../controllers/meetupsControllers';

const router = express.Router();

router.post('/', meetups.createMeetup);
router.get('/', meetups.findAll);
router.get('/upcoming', meetups.allUpcomings);
router.get('/:meetupId', meetups.findOne);
router.post('/:meetupId/rsvps', meetups.rsvps);

export default router;
