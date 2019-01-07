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
    };
    this.signUsers.push(newUser);
  }
}

export default new User();
