import fetch from 'cross-fetch';

/**
 *
 * @param {string} url
 * @param {object} headers
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

/**
 * FETCH POST
 * @param {string} url
 * @param {object} headers
 * @param {string} body
 */

export const postFetch = (url, headers, body) => new Promise((res, rej) => {
	fetch(url, { /* Didn't work */
		method: 'POST',
		...headers,
		body: JSON.stringify(body),
	})
		.then((response) => {
			if (response.status >= 400) {
				throw new Error('Bad response from server');
			}
			return response.json();
		})
		.then(user => res(user))
		.catch(err => rej(err));

	// fetch('https://api.github.com/user', {
	// 	method: 'POST',
	// 	...headers,
	// 	body: JSON.stringify(body),
	// })
	// 	.then((response) => {
	// 		if (response.status >= 400) {
	// 			throw new Error('Bad response from server');
	// 		}
	// 		return response.json();
	// 	})
	// 	.then(user => res(user))
	// 	.catch(err => rej(err));
});
