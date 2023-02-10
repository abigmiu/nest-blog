export interface IArticleResponseItem {
    id: number;
    createAt: string;
    updateAt: string;
    title: string;
    cover: string;
    summary: string;
    slug?: any;
    order: number;
    type?: any;
    status?: any;
    commentsNum: number;
    allowComment: boolean;
}

export interface IArticleDetailResponse extends IArticleResponseItem {
    text: string;
}
