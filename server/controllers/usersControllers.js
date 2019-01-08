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
          status: 201,
          data: [theUser]
        });
      }
      return res.status(409).json({
        status: 409,
        error: ' Email already exist',
      });
    }
    return res.status(400).json({
      status: 400,
      error: 'Bad Syntax: All fields are required',
    });
  },
};

export default User;
