import usersModels from '../models/usersModels';
import meetupsModels from '../models/meetupsModels';
import questionsModels from '../models/questionsModels';

const Question = {
  createQuestion(req, res) {
    const bodyOfRequest = req.body;
    const userExist = usersModels.signUsers.find(user => user.userId === bodyOfRequest.user);
    const confirmMeetup = meetupsModels.meetups.find(meetup => meetup.meetupId === bodyOfRequest.meetupId);
    
    if(bodyOfRequest.user && bodyOfRequest.meetupId && bodyOfRequest.title && bodyOfRequest.body){
      if(bodyOfRequest.user && bodyOfRequest.meetupId && !userExist && !confirmMeetup) {
        return res.status(401).json({
          status: 401,
          error: 'Unauthorized entity: Please fill in valid meetupId/UserId'
        })
      } 
      const createdQuestion = questionsModels.askQuestion(bodyOfRequest);
      return res.status(201).json({
        status: 201,
        data: [createdQuestion]
      });
    }
    return res.status(422).json({
      status: 422,
      error: "Please fill all required fields"
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
