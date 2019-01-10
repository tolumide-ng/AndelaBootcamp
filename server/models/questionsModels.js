import moment from 'moment';
import uuid from 'uuid';
import userModel from './usersModels';
import meetupsModels from './meetupsModels';


class Question {
  constructor() {
    this.questions = [];
  }

  askQuestion(requestBody) {
    const meetupExist = meetupsModels.getOne(requestBody.meetupId);
    const userExist = userModel.findUser(requestBody.userId);
    const theQuestion = {
      questionId: uuid.v4(),
      createdOn: moment.now(),
      createdBy: userExist.userId,
      meetupId: meetupExist.meetupId,
      title: requestBody.title,
      body: requestBody.body,
      vote: 0,
    };
    this.questions.push(theQuestion);
    return theQuestion;
  }

  findQ(idOfRequestedQuestion) {
    const requestedId = Number(idOfRequestedQuestion);
    return this.questions.find(question => question.questionId === requestedId);
  }

  requestUpvote(questionId) {
    // does the question exist
    const theUpvotedQuestion = this.findQ(questionId);
    theUpvotedQuestion.vote += 1;
    return theUpvotedQuestion;
  }

  requestDownvote(questionId) {
    // does the question exist
    const theDownvotedQuestion = this.findQ(questionId);
    theDownvotedQuestion.vote -= 1;
    return theDownvotedQuestion;
  }
}

export default new Question();
