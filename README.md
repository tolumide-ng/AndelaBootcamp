# AndelaBootcamp

[![Build Status](https://travis-ci.com/tolumide-ng/AndelaBootcamp.svg?branch=develop)](https://travis-ci.com/tolumide-ng/AndelaBootcamp)


[![Coverage Status](https://coveralls.io/repos/github/tolumide-ng/AndelaBootcamp/badge.svg?branch=develop)](https://coveralls.io/github/tolumide-ng/AndelaBootcamp?branch=develop)



[gh-pages](https://tolumide-ng.github.io/AndelaBootcamp/UI/index.html)

[Heroku](https://andelabootcamp.herokuapp.com/)



This is a Node RESTful API built completely on ES-6 and compiled with babel.
The app contains 9 routes each of which perform the following fucntions:

**POST** -localhost://3000/api/v1/meetups
**GET**  -localhost://3000/api/v1/meetups
**GET**  -localhost://3000/api/v1/meetups/upcoming
**GET**  -localhost://3000/api/v1/meetups/:meetupsId
**POST** -localhost://3000/api/v1/meetups/:meetupId/rsvps


**POST**  -localhost://3000/api/v1/questions
**PATCH** -localhost://3000/api/v1/questions/:questionId/upvote
**PATCH** -localhost://3000/api/v1/questions/:questionId/downvote

*POST** - localhost://3000/api/v1/users

The route of each of this endpoint is descriptive enough to show there functions. However, It should be noted that only an Admin can post meetups and only registered users can ask questions. Each user, admin, meetup, question is addressed an automatically generatedId once created.

The heroku app can be accessed here: [Heroku]()


You can use also use the app locally:
>- clone the repo 
>- cd into the repo and read the above endpoints to understand there use.

- Thank you!