//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Test Providers API', () => {
	let token;
	
	beforeEach((done) => { //Before each login with a sample credential amke sure to change the user here
		chai.request(server)
			.post('/api/auth')
			.send({ password: '12345678', email: 'nikhil@cloudcover.in' })
			.end((err, res) => {
				token = res.body.token;	
			done();
		});
	});
	
	describe('/GET Providers Without Auth Token', () => {
		
		it('it should give 401 status with unauthorized access', (done) => {
			chai.request(server)
				.get('/api/providers')
				.end((err, res) => {
					res.should.have.status(401);
				done();
			});
		});

	});

	describe('/GET Providers With Auth Token', () => {
		
		it('it should give 200 status with data set', (done) => {
			console.log(token);
			chai.request(server)
				.get('/api/providers')
				.set('authorization', 'bearer '+token)
				.end((err, res) => {
					res.should.have.status(200);
				done();
				});
		});

	});

});