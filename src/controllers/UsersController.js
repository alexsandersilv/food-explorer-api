
const UserRepository = require('../repositories/UsersRepository.js');
const UserCreateService = require('../services/Users/UsersCreateService');

class UsersController {

  async create(req, res) {
    const { name, email, password } = req.body;

    const userRepository = new UserRepository();
    const userCreateService = new UserCreateService(userRepository);

    await userCreateService.execute({ name, email, password });

    return res.status(201).json({ message: 'User created successfully' });
  }

}


module.exports = UsersController;