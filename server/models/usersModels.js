import moment from 'moment';
import uuid from 'uuid';

class User {
  constructor() {
    this.users = [];
    this.signUsers = [];
  }

  rsvp(data) {
    const newUser = {
      userId: uuid.v4(),
      registeredId: moment.now(),
      meetupId: data.meetupId,
      firstName: data.firstName,
      response: data.status,
    };
    this.users.push(newUser);
    return newUser;
  }

  signup(data) {
    const newUser = {
      userId: uuid.v4(),
      registeredId: moment.now(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    };
    this.signUsers.push(newUser);
    return newUser;
  }

  findUser(data) {
    return this.signUsers.find(user => user.userId === data);
  }
}

export default new User();
