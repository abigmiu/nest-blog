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

/** 创建 meta 请求 */
export interface ICreateMetaRequest {
    name: string;
    slug?: string;
    type: string;
    description?: string;
    order?: number;
}
