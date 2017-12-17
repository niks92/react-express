// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const patientSchema = new Schema({
	"DRG Definition": String,
	"Provider Id": String,
	"Provider Name": String,
	"Provider Street Address": String,
	"Provider City": String,
	"Provider State": String,
	"Provider Zip Code": String,
	"Hospital Referral Region Description": String,
	"Total Discharges": Number,
	"Average Covered Charges": String,
	"Average Total Payments": String,
	"Average Medicare Payments": String,
},{strict: false});

// the schema is useless so far
// we need to create a model using it
const Patient = mongoose.model('Patient', patientSchema);

// make this available to our users in our Node applications
module.exports = Patient;