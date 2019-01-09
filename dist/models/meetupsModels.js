'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Meetup = function () {
  function Meetup() {
    _classCallCheck(this, Meetup);

    this.meetups = [];
    this.attending = [];
  }
  //method creates a meetup


  _createClass(Meetup, [{
    key: 'create',
    value: function create(data) {
      var meetup = {
        meetupId: _uuid2.default.v4(),
        topic: data.topic,
        createdOn: _moment2.default.now(),
        location: data.location,
        images: data.images || '',
        happeningOn: data.happeningOn,
        tags: data.tags
      };
      this.meetups.push(meetup);
      return meetup;
    }

    //method gets all available meetups

  }, {
    key: 'getAll',
    value: function getAll() {
      return this.meetups;
    }

    //function gets one meetups

  }, {
    key: 'getOne',
    value: function getOne(meetupId) {
      return this.meetups.find(function (meetup) {
        return meetup.meetupId === meetupId;
      });
    }

    //method returns all upcoming meetups

  }, {
    key: 'upcomings',
    value: function upcomings() {
      return this.meetups.filter(function (meetup) {
        return new Date(meetup.happeningOn) > new Date();
      });
    }
  }]);

  return Meetup;
}();

exports.default = new Meetup();
//# sourceMappingURL=meetupsModels.js.map