import {API_URL, API_KEY} from '../parameters';

export const getFilms = (title) => {
    const url = `${API_URL}&s=${title}`;

    return fetch(url)
        .then((response) => {
            const statusCode = response.status;
            if (statusCode >= 200 && statusCode < 300) {
                return response.json();
            }
        })
        .then((json) => {
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
        })
    ;
};

export const getFilm = (id) => {
    const url = `${API_URL}&i=${id}`;

    return fetch(url)
        .then((response) => {
            const statusCode = response.status;
            if (statusCode >= 200 && statusCode < 300) {
                return response.json();
            }
        })
        .then((json) => {
            if ("False" === json.Response) {
                return;
            }

            return [json];
        })
        ;
};
