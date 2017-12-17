const User = require('../models/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/config')[process.env.NODE_ENV || 'development'];

function registerUser(req, res, next){
	if (!req.body.email || !req.body.password) {
		res.json({
		  success: false,
		  message: 'Please enter email and password.'
		});
	  } else {
		let newUser = new User({
		  email: req.body.email,
		  password: req.body.password
		});
	
		// Attempt to save the user
		newUser.save(function(err) {
		  if (err) {
			return res.status(400).json({
			  success: false,
			  message: 'That email address already exists.'
			});
		  }
		  res.json({
			success: true,
			message: 'Successfully created new user.'
		  });
		});
	  }
}

function authenticateUser(req, res, next){
	User.findOne({
		email: req.body.email
	  }, function(err, user) {
		if (err) throw err;
	
		if (!user) {
		  res.status(400).send({
			success: false,
			message: 'Authentication failed. User not found.'
		  });
		} else {
		  // Check if password matches
		  user.comparePassword(req.body.password, function(err, isMatch) {
			if (isMatch && !err) {
			  // Create token if the password matched and no error was thrown
			  var token = jwt.sign(user.toJSON(), config.auth.secret, {
				expiresIn: "2 days"
			  });
			  res.json({
				success: true,
				message: 'Authentication successfull',
				token
			  });
			} else {
				res.status(400).send({
				success: false,
				message: 'Authentication failed. Passwords did not match.'
			  });
			}
		  });
		}
	  });
}

module.exports = {
	registerUser,
	authenticateUser
}