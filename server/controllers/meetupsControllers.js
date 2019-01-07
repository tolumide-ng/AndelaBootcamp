import meetupsModels from '../models/meetupsModels';
import validation from '../validations/validate';

const meetups = {
  createMeetup(req, res) {
    // all parameters are required
    const data = req.body;
    const dateHappening = (new Date(data.happeningOn) > new Date());
    if (!data.topic && !data.location && !data.tags
            && !data.happeningOn && !dateHappening) {
      return res.status(422).json({
        message: 'All fields are required',
      });
    }
    const createdMeetup = meetupModel.create(data);
    return res.status(201).json({
      status: 201,
      topic: createdMeetup.topic,
      location: createdMeetup.location,
      happeningOn: createdMeetup.happeningOn,
      tags: validation.confirmArray(createdMeetup.tags),
      createdOn: createdMeetup.createdOn,
    });
  },

  findAll(req, res) {
    const allMeetups = meetupsModels.getAll();
    if (!allMeetups.length) {
      return res.status(404).json({
        message: 'Meetups not found',
      });
    }
    return res.status(200).json({
      status: 200,
      Meetups: allMeetups.length,
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
    if (!theMeetup) {
      return res.status(404).json({
        message: 'Meetup Not Found',
      });
    }
    return res.status(200).json({
      meetup: theMeetup.meetupId,
      createdOn: theMeetup.createdOn,
      topic: theMeetup.topic,
      location: theMeetup.location,
      happeningOn: theMeetup.happeningOn,
      tags: theMeetup.tags,
    });
  },
};

export default meetups;
