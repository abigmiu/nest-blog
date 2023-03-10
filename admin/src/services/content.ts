import { IArticleDetailResponse, IArticleResponseItem } from "../types/content";
import { request, withCancelToken } from "../utils/request"

class ContentService {
    private prefix = 'content'

    /** 新增文章 */
    addArticle(data: any) {
        return request(this.prefix, {
            method: 'POST',
            data,
        })
    }

    /** 更新文章 */
    updateArticle(id: number, data: any) {
        return request(`${this.prefix}/${id}`, {
            method: 'PUT',
            data,
        })
    }

    /** 文章分页 */
    getArticlePage() {
        return withCancelToken<IArticleResponseItem[]>(`${this.prefix}/page`)
    }

    /** 获取文章详情 */
    getArticleDetail(id: number) {
        return request<IArticleDetailResponse>(`${this.prefix}/${id}`);
    }

    /** 删除文章 */
    deleteArticle(id: number) {
        return request(`${this.prefix}/${id}`, {
            method: 'DELETE'
        })
    }
}

export const contentService = new ContentService();
