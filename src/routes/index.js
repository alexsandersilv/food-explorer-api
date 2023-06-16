const { Router } = require('express');

const routes = Router();

const usersRoutes = require('./users.routes');
const sessionRoutes = require('./sessions.routes');

const dishesRoutes = require('./dishes.routes');

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionRoutes);
routes.use('/dishes', dishesRoutes);

module.exports = routes; 