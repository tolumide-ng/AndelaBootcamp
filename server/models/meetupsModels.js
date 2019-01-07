import uuid from 'uuid';
import moment from 'moment';

class Meetup {
  constructor() {
    this.meetups = [];
    this.attending = [];
  }

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

  getAll() {
    return this.meetups;
  }

  getOne(meetupId) {
    return this.meetups.find(meetup => meetup.meetupId === meetupId);
  }

  upcomings() {
    return this.meetups.filter(meetup => new Date(meetup.happeningOn) > new Date());
  }
}

export default new Meetup();
