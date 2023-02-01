import { request } from "../utils/request"

class ContentService {
    private prefix = 'content'

    /** 新增文章 */
    addArticle(data: any) {
        return request(this.prefix, {
            method: 'POST',
            data,
        })
    }
}

export const contentService = new ContentService();
