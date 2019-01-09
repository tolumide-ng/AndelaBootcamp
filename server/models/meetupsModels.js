import uuid from 'uuid';
import moment from 'moment';

class Meetup {
  constructor() {
    this.meetups = [];
    this.attendingMeetups = [];
  }
  //method creates a meetup
  create(data) {
    const meetup = {
      meetupId: uuid.v4(),
      topic: data.topic,
      createdOn: moment.now(),
      location: data.location,
      images: data.images || '',
      happeningOn: data.happeningOn,
      tags: data.tags,
    };
    this.meetups.push(meetup);
    return meetup;
  }

  //method gets all available meetups
  getAll() {
    return this.meetups;
  }

  //function gets one meetups
  getOne(meetupId) {
    return this.meetups.find(meetup => meetup.meetupId === meetupId);
  }

  //method returns all upcoming meetups
  upcomings() {
    return this.meetups.filter(meetup => new Date(meetup.happeningOn) > new Date());
  }
}

export default new Meetup();
