import meetupsModels from '../models/meetupsModels';
import validation from '../validations/validate';
import usersModels from '../models/usersModels';

const meetups = {
  createMeetup(req, res) {
    const bodyOfRequest = req.body;
    // all parameters are required
    const doesUserExist = usersModels.findUser(bodyOfRequest.userId);
    if(doesUserExist){
      if(doesUserExist.isAdmin){
        const dateHappening = (new Date(bodyOfRequest.happeningOn) > new Date());
        if (!bodyOfRequest.topic || !bodyOfRequest.location || !bodyOfRequest.tags
                || !bodyOfRequest.happeningOn || !dateHappening) {
          return res.status(422).json({
            status: 422,
            error: 'All fields are required',
          });
        }
        const createdMeetup = meetupsModels.theCreatedMeetup(bodyOfRequest);
        return res.status(201).json({
          status: 201,
          data: [createdMeetup]
        });
      }
      return res.status(401).json({
        status: 401,
        error: 'Unauthorized Request: Only Admin can post meetups'
      })
      }
      return res.status(401).json({
        status: 401,
        error: 'Unauthorized Request: You need to be registered'
      })
    },

  findAll (req, res) {
    const findAllMeetups = meetupsModels.getAll();
    if (!findAllMeetups.length) {
      return res.status(404).json({
        status: 404,
        error: 'Meetups not found',
      });
    }
    return res.status(200).json({
      status: 200,
      data: findAllMeetups.map(meetup => ({
        meetup: meetup.meetupId,
        topic: meetup.topic,
        location: meetup.location,
        happeningOn: meetup.happeningOn,
        tags: meetup.tags,
      })),
    });
  },

  findOne(req, res) {
    const requestParameter = req.params.meetupId;
    const confirmMeetupExist = meetupsModels.getOne(requestParameter);
    if (!confirmMeetupExist) {
      return res.status(404).json({
        status: 404,
        error: 'Meetup Not Found',
      });
    }
    return res.status(200).json({
      status: 200,
      data: [confirmMeetupExist]
    });
  },

  allUpcomings(req, res) {
    const upcomingMeetups = meetupsModels.upcomings();
    if (upcomingMeetups.length < 1) {
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
    const bodyOfRequest = req.body;
    const confirmUserExist = usersModels.findUser(user=>user.userId === bodyOfRequest.user);
    const confirmMeetupExist = meetupsModels.getOne(bodyOfRequest.meetup);
    const confirmParameterIsSame = (req.body.meetupId === req.params.meetupId);
    const confirmStatus = (bodyOfRequest.status === 'yes' || 'no' || 'maybe');
    if(confirmMeetupExist && confirmParameterIsSame) {
      if(confirmStatus){
        usersModels.rsvp(bodyOfRequest);
        return res.status(200).json({
          status: 200,
          data: [confirmUserExist],
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
