export interface IMetaResponse {
    id: number;
    createAt: Date;
    updateAt: Date;
    name: string;
    slug: string;
    type: string;
    description?: string;
    count: number;
    order: number;
    parentId: number;
}
