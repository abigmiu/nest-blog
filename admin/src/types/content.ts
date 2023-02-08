
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
