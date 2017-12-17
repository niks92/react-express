import ProviderService from '../services/ProviderService';

class ProviderAction {

    getProviders(queryParams){
        let response = ProviderService.getProviders(queryParams);
        return response;
    }

}

export default new ProviderAction();
