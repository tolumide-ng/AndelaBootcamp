import users from '../models/usersModels';

const User = {
  signup(req, res) {
    const requestBody = req.body;
    const userEmail = requestBody.email;
    const doesUserAlreadyExist = users.signUsers.find(user => user.email === userEmail);
    const determingFactorsForCreation = requestBody.firstName && requestBody.lastName && requestBody.email && requestBody.otherName;
    if (determingFactorsForCreation) {
      if (!doesUserAlreadyExist) {
        const createUser = users.signup(requestBody);
        return res.status(201).json({
          status: 201,
          data: [createUser]
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
