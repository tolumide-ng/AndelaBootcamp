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
      topic: createdMeetup.topic,
      location: createdMeetup.location,
      happeningOn: createdMeetup.happeningOn,
      tags: validation.confirmArray(createdMeetup.tags),
      createdOn: createdMeetup.createdOn,
    });
  },
};

export default meetups;
