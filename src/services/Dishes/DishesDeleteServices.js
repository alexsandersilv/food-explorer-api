const hasContent = require('../../utils/hasContent');

class DishesDeleteServices {
  constructor(dishRepository) {
    this.dishRepository = dishRepository;
  }

  async execute({ id }) {
    hasContent(id, 'Prato não encontrado');
    const response = await this.dishRepository.delete({ id });

    return response;
  }
}

module.exports = DishesDeleteServices;