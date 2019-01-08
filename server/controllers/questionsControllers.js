import usersModels from '../models/usersModels';
import meetupsModels from '../models/meetupsModels';
import questionsModels from '../models/questionsModels';

const Question = {
  createQuestion(req, res) {
    const data = req.body;
    if (!data.title && !data.body && !data.user && !data.meetup) {
      const theUser = usersModels.signUsers.find(user => user.userId === data.user);
      const confirmMeetup = meetupsModels.meetups.find(meetup => meetup.meetupId === data.meetupId);
      if(theUser && confirmMeetup){
        const createdQuestion = questionsModels.askQuestion(req.body);
        return res.status(201).json({
          status: 201,
          data: [createdQuestion]
        });
      }
      return res.status(401).json({
        status: 401,
        error: 'Authentication Error!, Please confirm user and meetupId'
      })
    }
    return res.status(422).json({
      status: 422,
      error: 'All fields are required',
    });
  },

  upvote(req, res) {
    const data = req.params.questionId;
    const theQuestion = questionsModels.findQ(data);
    if (theQuestion) {
      const upvoteQuestion = questionsModels.requestUpvote(data);
      return res.status(200).json({
        status: 200, 
        data: [theQuestion]
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'Not found',
    });
  },

  downvote(req, res) {
    const data = req.params.questionId;
    const theQuestion = questionsModels.findQ(data);
    if (theQuestion) {
      questionsModels.requestDownvote(data);
      return res.status(200).json({
        status: 200, 
        data: [theQuestion]
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'Question Not Found',
    });
  },

};

export default Question;
