import moment from 'moment';
import meetupsModels from './meetupsModels';
import uuid from 'uuid';

class User {
  constructor() {
    this.users = [];
    this.signUsers = [];
  }

  signup(bodyOfRequest) {
    const newUser = {
      userId: Date.now(),
      firstName: bodyOfRequest.firstName,
      lastName: bodyOfRequest.lastName,
      otherName: bodyOfRequest.otherName,
      email: bodyOfRequest.email,
      phoneNumber: bodyOfRequest.phoneNumber,
      userName: bodyOfRequest.userName,
      registeredId: moment.now(),
      isAdmin: bodyOfRequest.isAdmin,
    };
    this.signUsers.push(newUser);
    return newUser;
  }

  rsvp(bodyOfRequest) {
    const registerNewUser = {
      userId: bodyOfRequest.userId,
      registeredId: moment.now(),
      meetupId: data.meetupId,
      firstName: data.firstName,
      response: data.status,
    };
    meetupsModels.attendingMeetups.push(registerNewUser);
    return newUser;
  }


  findUser(bodyOfRequest) {
    const requestedId = Number(ifOfRequestedUser);
    return this.signUsers.find(user => user.userId === requestedId);
  }
}

export default new User();
