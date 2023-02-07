export interface IResponse<T = any> {
    msg: string;
    code: number;
    data: T;
}
