
import axios from "axios";

let cookie = document.cookie


export const httpRequest = ({ url, method, params = "", data = {} }) => {
	const instance = axios.create({
		baseURL: `https://api.business.beibeilam.com/`,
		headers: {
			'Content-type': 'application/x-www-form-urlencoded',
			'Authorization': decodeURI((cookie.split('='))[1])
		}
	});
	return instance({ url, method, params, data })
		.then(res => {
			if (res.status == 200) {
				return res.data;
			} else {
				return {
					code: -1
				};
			}
		})
		.catch(error => {
			let res = error.response;
			return {
				code: -1
			};
		});
};
