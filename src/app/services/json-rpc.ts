import axios from 'axios';

export const rpcBody = (method) => (params) => ({
	jsonrpc: '2.0',
	id: '0',
	method: method,
	params: params
});
export const request =
	(url) =>
	 (method, params = {}) => {
	try {
		return axios.post(url, JSON.stringify(rpcBody(method)(params))).then((data) => {
			if (data['data'].error) {
				return data['data']
			} else if (data['data']) {
				return data['data'].result
			} else {
				return data
			}
		});
	}catch (e) {
		
	}
	 }

