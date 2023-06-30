const hasContent = require('../../utils/hasContent');

const DiskStorage = require('../../providers/DiskStorage');
const diskStorage = new DiskStorage();

class DishesCreateServices {
  constructor(dishRepository) {
    this.dishRepository = dishRepository;
  }

  async execute({ image, name, category, ingredients, price, description }) {

    hasContent(image, 'Você não selecionou uma imagem');
    hasContent(name, 'Você não colocou o nome do Prato');
    hasContent(category, 'Você não selecionou a categoria');
    hasContent(ingredients, 'Você não adicionou ingredients');
    hasContent(price, 'Você não adicionou o preço');
    hasContent(description, 'Você não adicionou uma descrição');

    const response = await this.dishRepository.create({ image, name, category, ingredients, price, description })
    await diskStorage.saveFile(image);

    return response;
  }
}

module.exports = DishesCreateServices;