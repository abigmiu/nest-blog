import { message } from 'antd';
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
    if (response.data.code !== 200) {
        handleBusinessError(response.data);
        return Promise.reject();
    }
    return response.data.data;
})

const handleBusinessError = (response: IResponse<any>) => {
    if (response.msg) {
        message.error(response.msg);
    }
}

/** 请求 */
export function request<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return instance.request({
        url,
        ...config,
    })
}

/** 获取可取消的请求 */
export function withCancelToken<K, A, B, C, D>(fetcher: (arg1?: A, arg2?: B, arg3?: C, arg4?: D) => K) {
    let controller: AbortController;

    function send(arg1?: A, arg2?: B, arg3?: C, arg4?: D) {
        cancel();
        controller = new AbortController();
        return fetcher(arg1, arg2, arg3, arg4)
    }

    function cancel() {
        if (controller) {
            controller.abort();
        }
    }

    return [send, cancel];
}
