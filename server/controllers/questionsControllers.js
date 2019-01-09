import usersModels from '../models/usersModels';
import meetupsModels from '../models/meetupsModels';
import questionsModels from '../models/questionsModels';

const Question = {
  createQuestion(req, res) {
    const bodyOfRequest = req.body;
    const userExist = usersModels.signUsers.find(user => user.userId === bodyOfRequest.user);
    const confirmMeetup = meetupsModels.meetups.find(meetup => meetup.meetupId === bodyOfRequest.meetupId);

    if(userExist && confirmMeetup && bodyOfRequest.title && bodyOfRequest.body){
      if(!userExist && !confirmMeetup) {
        return res.status(401).json({
          status: 401,
          error: 'Authentication Error!, Please confirm the meetupId and UserId is correct'
        })
      }
      const createdQuestion = questionsModels.askQuestion(bodyOfRequest);
      return res.status(201).json({
        status: 201,
        data: [createdQuestion]
      });
    }
    return res.status(404).json({
      status: 404,
      error: "No meetups/user with no Id, Please fill all required fields"
    })
  },

  upvote(req, res) {
    const idOfQuestion = req.params.questionId;
    const doesQuestionExist = questionsModels.findQ(idOfQuestion);
    if (doesQuestionExist) {
      questionsModels.requestUpvote(idOfQuestion);
      return res.status(200).json({
        status: 200,
        data: [doesQuestionExist],
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'Not found',
    });
  },

  downvote(req, res) {
    const idOfQuestion = req.params.questionId;
    const doesQuestionExist = questionsModels.findQ(idOfQuestion);
    if (doesQuestionExist) {
      questionsModels.requestDownvote(idOfQuestion);
      return res.status(200).json({
        status: 200,
        data: [doesQuestionExist],
      });
    }
    return res.status(404).json({
      status: 404,
      error: 'Question Not Found',
    });
  },

};

export default Question;
