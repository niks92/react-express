# React + Express Fullstack Project

This repository is an example fullstack web application using React on the
front-end and Express.js as your back-end server. It uses passport bearer authentication to authenticate users, protect your server API, and render default login and registration screens in your React application.

## 1. Getting Started

To run this example project on your local computer, you will need to have
NodeJS installed. Make sure you using the LTS version of nodejs.

## 2. Installation

Clone this repository, then using a terminal, navigate to the directory and run the following:

```bash
$ npm install
```

## 3. Usage

To start the server, run this command in the folder:

```bash
$ npm start
```

## 4. Deployment

The NodeJS web application is deployed to heroku:

[https://provider-data.herokuapp.com](https://provider-data.herokuapp.com)

The database is deployed to MongoLab. [mongodb://ds159926.mlab.com:59926/bain](mongodb://ds159926.mlab.com:59926/bain)


## 5. API Doucmentation

# Provider Resources

    GET /api/providers

## Description
Returns the list of providers

***

## Requires authentication
* A valid authentication token must be provided in the request header.

***

## Query Parameters

| Parameter                       | Description                               |
|---------------------------------|-------------------------------------------|
| `max_discharges`                | The maximum number of Total Discharges    |
| `min_discharges`                | The minimum number of Total Discharges    |
| `max_average_covered_charges`   | The maximum Average Covered Charges       | 
| `min_average_covered_charges`   | The minimum Average Covered Charges       |
| `max_average_medicare_payments` | The maximum Average Medicare Payment      |
| `min_average_medicare_payments` | The minimum Average Medicare Payment      |
| `state`                         | The exact state that the provider is from |
***

## Return format
```json
[
	{
		"Provider Name": "SOUTHEAST ALABAMA MEDICAL CENTER",
		"Provider Street Address": "1108 ROSS CLARK CIRCLE",
		"Provider City": "DOTHAN",
		"Provider State": "AL",
		"Provider Zip Code": "36301",	
		"Hospital Referral Region Description": "AL - Dothan",
		"Total Discharges": 91,
		"Average Covered Charges": "$32,963.07", 
		"Average Total Payments": 	"$5,777.24",
		"Average Medicare Payments": "$4,763.73"
	},
	{
		"Provider Name": "MARSHALL MEDICAL CENTER SOUTH",
		"Provider Street Address": "2505 U S HIGHWAY 431 NORTH",
		"Provider City": "BOAZ",
		"Provider State": "AL",
		"Provider Zip Code": "35957",	
		"Hospital Referral Region Description": "AL - Birmingham",
		"Total Discharges": 14,
		"Average Covered Charges": "$32,963.07", 
		"Average Total Payments": 	"$5,777.24",
		"Average Medicare Payments": "$4,763.73"
	}
	
]

```
## Login

    POST /api/auth

## Body Parameters

| Parameter                       | Description                               |
|---------------------------------|-------------------------------------------|
| `email`                | Email of user    |
| `password`                | Password of user (minimum 8 characters)    |
***

## Return format
```json

{   
    "success": true,
    "message": "Succesful",
    "token" "auth-token"
}

```

## Register

    POST /api/register

## Body Parameters

| Parameter                       | Description                               |
|---------------------------------|-------------------------------------------|
| `email`                | Email of user    |
| `password`                | Password of user (minimum 8 characters)    |
***

## Return format
```json

{   
    "success": true,
    "message": "Succesful"
}

```

