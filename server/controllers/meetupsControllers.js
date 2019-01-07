import meetupModel from '../models/meetupsModels';
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
      data: [
        topic: createdMeetup.topic,
        location: createdMeetup.location,
        happeningOn: createdMeetup.happeningOn,
        tags: validation.confirmArray(createdMeetup.tags),
        createdOn: createdMeetup.createdOn,
      ]
    });
  },

  findAll(req, res) {
    const allMeetups = meetupModel.getAll();
    if (allMeetups.length) {
      res.status(200).json({
        status: 200,
        data: [
          Meetups: allMeetups.length,
          data: allMeetups.map(meetup => ({
            meetup: meetup.meetupId,
            topic: meetup.topic,
            location: meetup.location,
            happeningOn: meetup.happeningOn,
            tags: meetup.tags,
          })),
        ]
      });
    }
    return res.status(404).json({
      message: 'Meetups not found',
    });
  },
};

export default meetups;

