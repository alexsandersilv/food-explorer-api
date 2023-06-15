const { Router } = require('express');

const routes = Router();

const usersRoutes = require('./users.routes');
const sessionRoutes = require('./sessions.routes');

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionRoutes);
module.exports = routes; 