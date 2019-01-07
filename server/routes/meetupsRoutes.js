import express from 'express';
import meetups from '../controllers/meetupsControllers';

const router = express.Router();

router.post('/', meetups.createMeetup);
router.get('/', meetups.findAll)
console.log('welocmer');
export default router;
