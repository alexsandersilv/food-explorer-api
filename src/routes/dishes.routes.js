const { Router } = require('express');
const multer = require('multer');

const dishesRoutes = Router();

const ensureAuthenticated = require('../middlewares/ensureAuthenticated.js');

const DishController = require('../controllers/DishController');
const dishesController = new DishController();

const upload = multer(uploadConfig.MULTER);
const uploadConfig = require('../configs/upload.js');

dishesRoutes.get('/', dishesController.listAll);
dishesRoutes.get('/info/:id', dishesController.info);
dishesRoutes.post('/', ensureAuthenticated, upload.single('image'), dishesController.create);
dishesRoutes.put('/', ensureAuthenticated, upload.single('image'), dishesController.update);
dishesRoutes.delete('/del/:id', ensureAuthenticated, dishesController.delete);


module.exports = dishesRoutes;