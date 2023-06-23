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

  async info(req, res) {
    const { id } = req.params;
   
    const data = await knex('dishes').where({ id });

    return res.json({ data });
  }

  async listAll(req, res) {
    const dish = await knex('dishes');

    return res.json({ 
      dish
    })
  }

  async update(req, res) {
    try {
      
      const image = req.file.filename;
      const { id, name, category, ingredients, price, description } = req.body;

      const dish = await knex('dishes').where({ id });

      if (!dish[0]) {
        throw new AppError('Prato não existe', 401);
      }
      
      const diskStorage = new DiskStorage();
      if (dish[0].avatar) {
        await diskStorage.deleteFile(user.avatar); 
      }

      const filename = await diskStorage.saveFile(image);

      dish[0].img = filename;
      dish[0].name = name;
      dish[0].category = category;
      dish[0].ingredients = ingredients;
      dish[0].price = price;
      dish[0].description = description;

      await knex('dishes').update(dish[0]).where({ id });


      return res.json({ message: "OK" });

    } catch (error) {
      console.log(error)
      throw new AppError(error.message, 401)      
    }
  }
}

module.exports = DishController;