const providerController = require('./controllers/providerController');
const express = require('express');
const userController = require('./controllers/userController');
const passport = require('passport');
require('./config/passport')(passport);
let jwt = require('jsonwebtoken');

module.exports = function(app) {  
	// Initializing route groups
	const apiRoutes = express.Router();	

	apiRoutes.get('/providers', passport.authenticate('jwt', { session: false}), providerController.getProviders);
	apiRoutes.post('/register', userController.registerUser);
	apiRoutes.post('/auth', userController.authenticateUser);

	app.use('/api', apiRoutes);
};