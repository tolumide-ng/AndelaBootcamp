import usersModels from '../models/usersModels';
import meetupsModels from '../models/meetupsModels';
import questionsModels from './../models/questionsModels';

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

  upvote(req, res) {
    const theQuestion = questionsModels.findQ(data.questionId);
    const theUser = usersModels.findUser(data.userId);
    // does the meetup exist
    const theMeetup = meetupsModels.getOne(data.meetupId);
    if(theQuestion && theUser && theMeetup){
        const upvoteQuestion = questionsModels.requestUpvote(req.body);
        return res.status(200).json({
            downvote: upvoteQuestion.downvote,
            upvote: upvoteQuestion.upvote
        });
    }
    return res.status(404).json({
        message: 'Not found'
    });
},

downvote(req, res) {
  const theQuestion = questionsModels.findQ(data.questionId);
    const theUser = usersModels.findUser(data.userId);
    // does the meetup exist
    const theMeetup = meetupsModels.getOne(data.meetupId);
  if(theQuestion && theUser && theMeetup){
      const upvoteQuestion = questionsModels.requestDownvote(req.body);
      return res.status(200).json({
          downvote: upvoteQuestion.downvote,
          upvote: upvoteQuestion.upvote
      });
  }
  return res.status(404).json({
      message: 'Not found'
  });
}

};

export default Question;
