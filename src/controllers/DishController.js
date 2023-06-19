const knex = require('../database/knex');
const AppError = require('../utils/AppError')

const DiskStorage = require('../providers/DiskStorage');
const diskStorage = new DiskStorage();


function hasContent(content, message) {
  if (!content) {
    throw new AppError(message, 401);
  }
}



class DishController {

  async create(req, res) {
    try {

      const image = req.file.filename;
      const { name, category, ingredients, price, description } = req.body;

      hasContent(image, 'Você não selecionou uma imagem');
      hasContent(name, 'Você não colocou o nome do Prato');
      hasContent(category, 'Você não selecionou a categoria');
      hasContent(ingredients, 'Você não adicionou ingredients');
      hasContent(price, 'Você não adicionou o preço');
      hasContent(description, 'Você não adicionou uma descrição');
  
  
      await diskStorage.saveFile(image);
      await knex('dishes').insert({
        img: image,
        name,
        category,
        ingredients,
        price,
        description
      });


      
      return res.json({ message: "OK" });
    } catch (error) {
      console.error(error);      
    }
  }

  async listAll(req, res) {
    const dish = await knex('dishes');
    const ingredients = await knex('ingredients');

    return res.json({ 
      dish,
      ingredients
    })
  }
}

module.exports = DishController;