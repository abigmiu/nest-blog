const baseUrl = '/api';

export const cFetch = (url: string, options?: Record<string, any>) => {
    const requestUrl = `${baseUrl}/${url}`;

    return new Promise((resolve, reject) => {
        useFetch(requestUrl, {...options})
            .then((response) => {
                return response.data;
            });
    });
};
