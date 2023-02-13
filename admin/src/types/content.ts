import { IMetaListResponseItem } from "./meta";

export interface IWallpaperResponseItem {
    id: number;
    url: string;
    freeze: boolean;
    remark: string;
    tags: string[];
}

export interface IWallpaperCreate {
    url: string;
    remark: string;
    tags: string[]
}

export interface IArticleResponseItem {
    id: number;
    createAt: string;
    updateAt: string;
    title: string;
    summary: string;
    slug?: any;
    order: number;
    type?: any;
    status?: any;
    commentsNum: number;
    allowComment: boolean;

    categories: IMetaListResponseItem[];
    tags: IMetaListResponseItem[];
}

export interface IArticleDetailResponse extends IArticleResponseItem {
    text: string;
}
