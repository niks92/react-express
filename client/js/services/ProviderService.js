import { FETCH_PROVIDERS_URL } from '../constants';

const BaseService = require('./BaseService');

class ProviderService extends BaseService {

	getProviders(params){
		return BaseService.createGetRequest(FETCH_PROVIDERS_URL, params, localStorage.getItem('token'), null);
	}

}

export default new ProviderService();
