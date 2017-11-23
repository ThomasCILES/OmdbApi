import {API_URL} from '../parameters';

/**
 * Get films from title
 * @param title
 * @returns {Promise.<TResult>}
 */
export const getFilms = (title) => {
    const url = `${API_URL}&s=${title}`;

    return sendFetchRequest(url);
};

/**
 * Get one film from id
 * @param id
 * @returns {Promise.<TResult>}
 */
export const getFilm = (id) => {
    const url = `${API_URL}&i=${id}`;

    return sendFetchRequest(url);
};

/**
 * Send Fetch Request
 * @param url
 */
const sendFetchRequest = (url) => {
    return fetch(url)
        .then(responseToJSON)
        .then(filmsFromJSON)
    ;
};

/**
 * Get json from response
 * @param response
 * @returns {*}
 */
const responseToJSON = (response) => {
    const statusCode = response.status;
    if (statusCode >= 200 && statusCode < 300) {
        return response.json();
    }
};

/**
 * Get films from json
 * @param json
 * @returns {*}
 */
const filmsFromJSON = (json) => {
    if ("False" === json.Response) {
        return;
    }

    if (undefined === json.Search) {
        return [json];
    }

    return json.Search.reduce((acc, film) => {
        acc = acc.concat(film);
        return acc;
    }, [])
};