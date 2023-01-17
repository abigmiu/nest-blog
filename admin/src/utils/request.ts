import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IResponse } from '../types/http';

const instance = axios.create({
    baseURL: '/api',
    withCredentials: true,
})

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
        config.headers['Authorization'] = token;
    }
    return config;
})
instance.interceptors.response.use((response: AxiosResponse<IResponse<any>>) => {
    return response.data.data;
})

/** 请求 */
export function request<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return instance.request({
        url,
        ...config,
    })
}

/** 获取可取消的请求 */
export function withCancelToken(fetcher: typeof request) {
    let controller: AbortController;

    function send(url: string, config: AxiosRequestConfig = {}) {
        cancel();
        controller = new AbortController();
        return fetcher(url, {
            ...config,
            signal: controller.signal
        })
    }

    function cancel() {
        if (controller) {
            controller.abort();
        }
    }

    return [send, cancel];
}