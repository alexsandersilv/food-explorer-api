const hasContent = require('../../utils/hasContent');

const DiskStorage = require('../../providers/DiskStorage');
const diskStorage = new DiskStorage();

class DishesUpdateServices {
  constructor(dishRepository) {
    this.dishRepository = dishRepository;
  }

  async execute({ id, image, name, category, ingredients, price, description }) {

    hasContent(id, 'Prato não encontrado');
    hasContent(image, 'Você não selecionou uma imagem');
    hasContent(name, 'Você não colocou o nome do Prato');
    hasContent(category, 'Você não selecionou a categoria');
    hasContent(ingredients, 'Você não adicionou ingredients');
    hasContent(price, 'Você não adicionou o preço');
    hasContent(description, 'Você não adicionou uma descrição');

    await diskStorage.saveFile(image);
    const response = await this.dishRepository.update({ id, image, name, category, ingredients, price, description });

    return response;

  }
}

module.exports = DishesUpdateServices;