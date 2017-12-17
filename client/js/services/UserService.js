import request from 'reqwest';
import {USERS_REGISTERATION_URL, USERS_LOGIN_URL} from '../constants';

const BaseService = require('./BaseService');

class UserService extends BaseService {

    registerUser(userData) {
        return BaseService.createPostRequest(USERS_REGISTERATION_URL, null, null,  JSON.stringify(userData), "application/json");
    }

    loginUser(userData){
        return BaseService.createPostRequest(USERS_LOGIN_URL, null, null,  JSON.stringify(userData), "application/json");
    }
}

export default new UserService();
