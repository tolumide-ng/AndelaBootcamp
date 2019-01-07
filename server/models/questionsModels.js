/* import moment from 'moment';
import uuid from 'uuid';
import meetupModel from './meetupsModels';
import userModel from './usersModels';


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
      upvote: data.upvote,
      downvote: data.downvote,
    };
    this.questions.push(theQuestion);
    return theQuestion;
  }
} */