const sqliteConnection = require('../database/sqlite');


class DishController {

  async create(req, res) {
    try {
      const { img, name, category, ingredients, price, description } = req.body;
  
      // const database = await sqliteConnection();
  
      // const use
      rId = await database.run('INSERT INTO dishes (img, name, category, ingredients, price, description) VALUES (?, ?, ?)', [name, email, password]);
      
      // console.log({ img, name, category, ingredients, price, description });

      return;
    } catch (error) {
      console.error(error);      
    }

  }
}

module.exports = DishController;