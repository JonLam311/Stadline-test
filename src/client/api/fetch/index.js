import fetch from 'cross-fetch';

/**
 * fetch GET
 * @param url (string)
 * @param headers (obj)
 */

export const getFetch = (url, headers) => new Promise((res, rej) => {
	fetch(url, {
		method: 'get',
		...headers,
	})
		.then((response) => {
			if (response.status >= 400) {
				throw new Error('Bad response from server');
			}
			return response.json();
		})
		.then(user => res(user))
		.catch(err => rej(err));
});
