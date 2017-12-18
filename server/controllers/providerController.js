const Provider = require('../models/provider');

/**
 * @function getProviders - List of providers depending on query
 *
 * @param req Object
 * @param res Object
 * @param next Object
 */

function getProviders(req, res, next){
	let {max_discharges, min_discharges, max_average_covered_charges, state,
		min_average_covered_charges, min_average_medicare_payments, max_average_medicare_payments} = req.query;
	
	let searchQuery = {};
	
	if(max_discharges || min_discharges){
		searchQuery['Total Discharges'] = {};
		if(max_discharges)
			searchQuery['Total Discharges']['$lt'] = parseInt(max_discharges)
		if(min_discharges)
			searchQuery['Total Discharges']['$gt'] = parseInt(min_discharges)
	}

	if(max_average_covered_charges || min_average_covered_charges){
		searchQuery['$where'] = "";
		if(max_average_covered_charges)
			searchQuery['$where'] = `this['Average Covered Charges'].substr(1) < ${max_average_covered_charges}`;
		if(min_average_covered_charges)
			searchQuery['$where'] = (searchQuery['$where'] ? (searchQuery['$where'] + " && "):'')+`this['Average Covered Charges'].substr(1) > ${min_average_covered_charges}`;
	}

	if(max_average_medicare_payments || min_average_medicare_payments){
		searchQuery['$where'] = searchQuery['$where'] ? searchQuery['$where'] : "";
		if(max_average_medicare_payments)
			searchQuery['$where'] = (searchQuery['$where'] ? (searchQuery['$where'] + " && "):'')+`this['Average Medicare Payments'].substr(1) < ${max_average_medicare_payments}`;
		if(min_average_medicare_payments)
		searchQuery['$where'] = (searchQuery['$where'] ? (searchQuery['$where'] + " && "):'')+`this['Average Medicare Payments'].substr(1) > ${min_average_medicare_payments}`;
	}

	Provider.find(searchQuery)
	.limit(20)
	.lean()
	.exec((err, response) => {
		if(err)
			next(err);  
		res.status(200).send(response);
	})
}

module.exports = {
	getProviders
}