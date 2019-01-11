import uuid from 'uuid';
import moment from 'moment';

class Meetup {
  constructor() {
    this.meetups = [];
    this.attendingMeetups = [];
  }
  //method creates a meetup
  theCreatedMeetup(bodyOfRequest) {
    const meetup = {
<<<<<<< HEAD
      meetupId: Date.now(),
      createdOn: Date.now(),
||||||| merged common ancestors
      meetupId: uuid.v4(),
      topic: data.topic,
      createdOn: moment.now(),
=======
      meetupId: Date.now(),
      topic: data.topic,
      createdOn: new Date(),
>>>>>>> bdc62679d3830eba7f5c4713c63e20083e1fa018
      location: data.location,
      images: data.images || '',
      topic: data.topic,
      happeningOn: data.happeningOn,
      tags: data.tags,
    };
    this.meetups.push(theCreatedMeetup);
    return meetup;
  }

  //method gets all available meetups
  getAll() {
    return this.meetups;
  }

  //function gets one meetups
  getOne(meetupId) {
    const meetupIdtoNumber = Number(meetupId);
    return this.meetups.find(meetup => meetup.meetupId == meetupId);
  }

  //method returns all upcoming meetups
  upcomings() {
    return this.meetups.filter(meetup => new Date(meetup.happeningOn.toString()) > new Date());
  }
}

export default new Meetup();
