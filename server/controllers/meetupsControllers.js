import meetupsModels from '../models/meetupsModels';
import validation from '../validations/validate';
import usersModels from '../models/usersModels';

const meetups = {
  createMeetup(req, res) {
    // all paraters are required
    const data = req.body;
    const dateHappening = (new Date(data.happeningOn) > new Date());
    if (!data.topic || !data.location || !data.tags
            || !data.happeningOn || !dateHappening) {
      return res.status(422).json({
        status: 422,
        error: 'All fields are required',
      });
    }
    const createdMeetup = meetupModel.create(data);
    return res.status(201).json({
      status: 201,
      data: [createdMeetup]
    });
  },

  findAll(req, res) {
    const allMeetups = meetupsModels.getAll();
    if (!allMeetups.length) {
      return res.status(404).json({
        status: 404,
        error: 'Meetups not found',
      });
    }
    return res.status(200).json({
      status: 200,
      data: allMeetups.map(meetup => ({
        meetup: meetup.meetupId,
        topic: meetup.topic,
        location: meetup.location,
        happeningOn: meetup.happeningOn,
        tags: meetup.tags,
      })),
    });
  },

  findOne(req, res) {
    const params = req.params.meetupId;
    const theMeetup = meetupsModels.getOne(params);
    if (theMeetup.length == 0) {
      return res.status(404).json({
        status: 404,
        error: 'Meetup Not Found',
      });
    }
    return res.status(200).json({
      status: 200,
      data: [theMeetup]
    });
  },

  allUpcomings(req, res) {
    const upcomingMeetups = meetupModel.upcomings();
    if (upcomingMeetups.length) {
    return res.status(404).json({
      status: 404,
      error: 'No meetups found',
    });
      
    }
	return res.status(200).json({
        status: 200,
        data: upcomingMeetups.map(upcomingMeetup => ({
          meetupId: upcomingMeetup.meetupId,
          title: upcomingMeetup.topic,
          location: upcomingMeetup.location,
          happeningOn: upcomingMeetup.happeningOn,
          tags: upcomingMeetup.tags,
        })),
      });
  },

  rsvps(req, res) {
    const data = req.body;
    const confirmUser = usersModels.findUser(user=>user.userId === data.user);
    const confirmMeetup = meetupsModels.getOne(data.meetup);
    const confirmParams = (req.body.meetupId === req.params.meetupId);
    const confirmStatus = (data.status === 'yes' || 'no' || 'maybe');
    if(confirmMeetup && confirmParams) {
      if(confirmStatus){
        usersModels.rsvp(data);
        return res.status(200).json({
          status: 200,
          data: [confirmUser],
        });
      }
    		return res.status(404).json({
    		status: 404,
    		error: 'Ensure information provided are valid, Not found',
        });
    }
    return res.status(422).json({
      status: 422,
      error: 'Ensure information provided are valid',
    });
  },

};

export default meetups;
