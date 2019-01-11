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
      meetupId: Date.now(),
      createdOn: Date.now(),
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
    return this.meetups.find(meetup => meetup.meetupId === meetupId);
  }

  //method returns all upcoming meetups
  upcomings() {
    return this.meetups.filter(meetup => new Date(meetup.happeningOn) > new Date());
  }
}

export default new Meetup();
