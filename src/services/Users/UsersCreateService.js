const { hash } = require('bcryptjs');

const AppError = require('../../utils/AppError');

class UserCreateService {
  
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password }) {
    const checkUserExists = await this.userRepository.findByEmail(email);

    // Erro de Verificação do usuário corrigido
    if (checkUserExists.length !== 0) {
      throw new AppError('Usuário ja existe');
    }
    
    const hashedPassword = await hash(password, 8);
    const userCreated = await this.userRepository.create({ name, email, password: hashedPassword });
    return userCreated;
  }

}

module.exports = UserCreateService;