import usersModels from '../models/usersModels';
import meetupsModels from '../models/meetupsModels';

const Question = {
  createQuestion(req, res) {
    const data = req.body;
    if (!data.title && !data.body && !data.user && !data.meetup) {
      const theUser = usersModels.signUsers.find(user => user.userId === data.user);
      const confirmMeetup = meetupsModels.meetups.find(meetup => meetup.meetupId === data.meetupId);
      const createdQuestion = questionsModels.askQuestion(req.body);
      return releaseEvents.status(201).json({
        createdBy: createdQuestion.createdBy,
        meetupId: createdQuestion.meetupId,
        questionId: createdQuestion.questionId,
        body: createdQuestion.body,
        title: createdQuestion.title,
        upvote: createdQuestion.upvote,
        downvote: createdQuestion.downvote,
      });
    }
    return res.status(422).json({
      message: 'All fields are required',
    });
  },
};
