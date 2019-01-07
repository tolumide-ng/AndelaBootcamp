import moment from 'moment';
import uuid from 'uuid';

class User {
    constructor(){
        this.users =[];
    }

    rsvp (data) {
        const newUser = {
          userId: uuid.v4(),
          registeredId: moment.now(),
          meetupId: data.meetupId,
          firstName: data.firstName,
        };
        this.users.push(newUser);
        return newUser;
      }
}

export default new User();
