import moment from 'moment';
import uuid from 'uuid';
import userModel from './usersModels';
import meetupsModels from '../models/meetupsModels'


class Question {
  constructor() {
    this.questions = [];
    this.votes = [];
  }

  askQuestion(data) {
    const theMeetup = meetupModel.getOne(data.meetupId);
    const theUser = userModel.findUser(data.userId);
    const theQuestion = {
      questionId: uuid.v4(),
      createdOn: moment.now(),
      createdBy: `${theUser.firstName} ${theUser.lastName}`,
      userId: theUser.userId,
      meetupId: theMeetup.meetupId,
      title: data.title,
      body: data.body,
      vote: data.upvote,
    };
    this.questions.push(theQuestion);
    return theQuestion;
  }

  findQ(data) {
    return this.questions.find(question => question.questionId === data);
  }

  upvote(req, res) {
    const theQuestion = questionsModels.forDel(data.questionId);
    // does the user exist
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

}

export default new Question();