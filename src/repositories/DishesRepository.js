const knex = require('../database/knex');

class DishesRepository {
  async create({ image, name, category, ingredients, price, description }) {
    try {
      const dish = await knex('dishes').insert({
        img: image,
        name,
        category,
        ingredients,
        price,
        description
      });

      return {
        success: true,
        data: {
          message: 'Prato criado com sucesso',
          dish
        }
      }

    } catch (error) {
      console.log(error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async update({ id, image, name, category, ingredients, price, description }) {
    try {
      const dish = await knex('dishes').where({ id });
      const hasDish = dish[0];

      if (!hasDish) {
        throw new AppError('Prato não existe', 401);
      } 

      if (hasDish.img) {
        await diskStorage.deleteFile(hasDish.image);
      }

      const filename = await diskStorage.saveFile(image);
      hasDish.img = filename;
      hasDish.name = name;
      hasDish.category = category;
      hasDish.ingredients = ingredients;
      hasDish.price = price;
      hasDish.description = description;

      await knex('dishes').update(existingDish).where({ id });

      return {
        success: true,
        message: 'Prato atualizado com sucesso',
        data: hasDish
      }

    } catch (error) {
      console.log(error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async delete({ id }) {
    try {
      await knex('dishes').where({ id }).delete();

      return {
        success: true,
        data: {
          message: 'Prato deletado com sucesso'
        }
      }
    } catch (error) {
      console.error(error);
      return {
        success: false,
        error: error.message
      }
    }
  
  }

  async info({ id }) {
    try {
      const dish = await knex('dishes').where({ id });

      return {
        success: true,
        data: {
          dish
        }
      }

    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: error.message
      }
    }

  }
  
}

module.exports = DishesRepository;