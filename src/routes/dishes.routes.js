const { Router } = require('express');
const multer = require('multer');

const dishesRoutes = Router();

const DishController = require('../controllers/DishController');
const dishesController = new DishController();

const uploadConfig = require('../configs/upload.js');

const upload = multer(uploadConfig.MULTER);


dishesRoutes.get('/', dishesController.listAll);
dishesRoutes.post('/', upload.single('image'), dishesController.create);

module.exports = dishesRoutes;