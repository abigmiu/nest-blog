const baseUrl = 'http://127.0.0.1:3005';

export const cFetch = async <T>(url: string, options?: Record<string, any>) => {
    const requestUrl = `${baseUrl}${url}`;
    const response = await useFetch<T>(requestUrl, {...options});
    console.log('cFetch', response.data);
    return response;
};
