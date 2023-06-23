const { Router } = require('express');
const multer = require('multer');

const dishesRoutes = Router();

const DishController = require('../controllers/DishController');
const dishesController = new DishController();

const uploadConfig = require('../configs/upload.js');

const upload = multer(uploadConfig.MULTER);

const ensureAuthenticated = require('../middlewares/ensureAuthenticated.js');


dishesRoutes.get('/', dishesController.listAll);
dishesRoutes.get('/info/:id', dishesController.info);
dishesRoutes.post('/', ensureAuthenticated, upload.single('image'), dishesController.create);
dishesRoutes.put('/', ensureAuthenticated, upload.single('image'), dishesController.update);


module.exports = dishesRoutes;