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
      createdOn: moment.now(),
      location: data.location,
      images: data.images || '',
      topic: data.topic,
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
}

export default new Meetup();
