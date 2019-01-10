import moment from 'moment';
import meetupsModels from './meetupsModels';
import uuid from 'uuid';

class User {
  constructor() {
    this.users = [];
    this.signUsers = [];
  }

  rsvp(data) {
    const registerNewUser = {
      userId: uuid.v4(),
      registeredId: moment.now(),
      meetupId: data.meetupId,
      firstName: data.firstName,
      response: data.status,
    };
    meetupsModels.attendingMeetups.push(registerNewUser);
    return newUser;
  }

  signup(bodyOfRequest) {
    const newUser = {
      userId: uuid.v4(),
      registeredId: moment.now(),
      firstName: bodyOfRequest.firstName,
      lastName: bodyOfRequest.lastName,
      email: bodyOfRequest.email,
    };
    this.signUsers.push(newUser);
    return newUser;
  }

  findUser(data) {
    return this.signUsers.find(user => user.userId === data);
  }
}

export default new User();
