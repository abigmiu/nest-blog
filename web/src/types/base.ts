export interface IResponse<T = any> {
    msg: string;
    code: number;
    data: T;
}

export type IMetaListResponseItem = {
    id: number;
    createAt: string;
    updateAt: string;
    isDel: boolean;
    name: string;
    slug: string;
    type: string;
    description?: string;
    count: number;
    order: number;
    parentId: number;
    parentName?: string;
}
