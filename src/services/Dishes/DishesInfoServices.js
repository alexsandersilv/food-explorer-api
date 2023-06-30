const hasContent = require('../../utils/hasContent');

class DishesInfoServices {
  constructor(dishRepository) {
    this.dishRepository = dishRepository;
  }

  async execute({ id }) {

    hasContent(id, 'Prato não encontrado');
    const response = await this.dishRepository.info({ id });

    return response;
  }
}

module.exports = DishesInfoServices;