import users from '../models/usersModels';

const User = {
  signup(req, res) {
    const data = req.body;
    const theEmail = data.email;
    const theConfirm = users.signUsers.find(user => user.email === theEmail);
    if (data.firstName && data.lastName && data.email) {
      if (!theConfirm) {
        const theUser = users.signup(data);
        return res.status(201).json({
          firstName: theUser.firstName,
          lastName: theUser.lastName,
          email: theUser.email,
          phoneNumber: theUser.phoneNumber,
        });
      }
      return res.status(409).json({
        message: ' Email already exist',
      });
    }
    return res.status(400).json({
      message: 'Bad Syntax: All fields are required',
    });
  },
};

export default User;
