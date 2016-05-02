import axios from 'axios';

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_DONE = 'FETCHING_DONE';
export const FETCHING_ERROR = 'FETCHING_ERROR';

export function startFetching(url) {
    return {
        type: FETCHING_START,
        url
    };
}

export function doneFetching(url, data) {
    return {
        type: FETCHING_DONE,
        url,
        data
    };
}

export function errorFetching(url, message) {
    return {
        type: FETCHING_ERROR,
        url,
        message
    };
}

export function fetchSource(source) {
    return (dispatch) => {
        dispatch(startFetching(source));

        axios.get(source, {reponseType: 'text'}).then((response) => {
            return dispatch(doneFetching(source, response.data));

        }).catch((response) => {
            if (response instanceof Error) {
                return dispatch(errorFetching(source, response.stack));
            } else {
                return dispatch(errorFetching(source, ''));
            }
        });
    }
}
