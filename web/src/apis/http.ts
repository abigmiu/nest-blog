const baseUrl = '/api';

export const cFetch = async (url: string, options?: Record<string, any>) => {
    const requestUrl = `${baseUrl}/${url}`;
    const response = await useFetch(requestUrl, {...options});
    console.log('cFetch', response.data)
    return response;
};
