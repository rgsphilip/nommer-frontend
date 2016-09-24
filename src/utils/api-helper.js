//Utilized https://scotch.io/tutorials/build-a-react-flux-app-with-user-authentication to implement authentication, including this file.

import AuthStore from '../stores/AuthStore';

export const getAuth = (url, body) => {
    return fetch(url, {
			method: 'GET',
			headers: {
				"Accept": "application/json",
        "Authorization": "Bearer " + AuthStore.getJwt()
			}
    });
};

export const postAuth = (url, body) => {
    return fetch(url, {
			method: 'POST',
			headers: {
				"Accept": "application/json",
        "Authorization": "Bearer " + AuthStore.getJwt(),
				'Content-Type': 'application/json',
			},
      body: JSON.stringify(body)
    });
};
