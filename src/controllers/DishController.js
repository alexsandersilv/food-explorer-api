const knex = require('../database/knex');
const AppError = require('../utils/AppError');

const DishesRepository = require('../repositories/DishesRepository');
const DishesCreateServices = require('../services/Dishes/DishesCreateServices');
const DishesUpdateServices = require('../services/Dishes/DishesUpdateServices');
const DishesDeleteServices = require('../services/Dishes/DishesDeleteServices');
const DishesInfoServices = require('../services/Dishes/DishesInfoServices');

class DishController {
  async create(req, res) {
    try {
      const image = req.file.filename;
      const { name, category, ingredients, price, description } = req.body;

      const dishRepository = new DishesRepository();
      const dishesCreateServices = new DishesCreateServices(dishRepository);

      const response = await dishesCreateServices.execute({ image, name, category, ingredients, price, description });

      return res.json(response);
    } catch (error) {
      console.error(error);
    }
  }

  async update(req, res) {
    try {
      const image = req.file.filename;
      const { id, name, category, ingredients, price, description } = req.body;
      
      const dishRepository = new DishesRepository();
      const dishesUpdateServices = new DishesUpdateServices(dishRepository);

      const response = await dishesUpdateServices.execute({ id, image, name, category, ingredients, price, description });

      return res.json(response);
    } catch (error) {
      console.log(error);
      throw new AppError(error.message, 401);
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    const dishRepository = new DishesRepository();
    const dishesDeleteServices = new DishesDeleteServices(dishRepository);

    const response = await dishesDeleteServices.execute({ id });

    return res.json(response);
  }

  async info(req, res) {
    const { id } = req.params;

    const dishRepository = new DishesRepository();
    const dishesInfoServices = new DishesInfoServices(dishRepository);

    const response = await dishesInfoServices.execute({ id });

    return res.json({
      ...response.data
    });
  }

  async listAll(req, res) {
    const dish = await knex('dishes');

    return res.json({ dish });
  }


}

module.exports = DishController;