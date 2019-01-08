import moment from 'moment';
import uuid from 'uuid';
import userModel from './usersModels';
import meetupsModels from './meetupsModels';


class Question {
  constructor() {
    this.questions = [];
  }

  askQuestion(data) {
    const theMeetup = meetupsModels.getOne(data.meetupId);
    const theUser = userModel.findUser(data.userId);
    const theQuestion = {
      questionId: uuid.v4(),
      createdOn: moment.now(),
      userId: theUser.userId,
      meetupId: theMeetup.meetupId,
      title: data.title,
      body: data.body,
      vote: data.vote,
    };
    this.questions.push(theQuestion);
    return theQuestion;
  }

  findQ(data) {
    return this.questions.find(question => question.questionId === data);
  }

  requestUpvote(data) {
    // does the question exist
    const theQuestion = this.findQ(data);
    theQuestion.vote += 1;
    return theQuestion;
  }

  requestDownvote(data) {
    // does the question exist
    const theQuestion = this.findQ(data);
    theQuestion.vote -= 1;
    return theQuestion;
  }
}

export default new Question();
