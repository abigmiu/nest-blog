import { request } from "../utils/request";

/** 网站选项相关请求 */
class WebsiteService {
    /** 获取网站公告 */
    getAnnouncement() {
        return request<string[]>('option/announcement')
    }

    /** 设置网站公告 */
    setAnnouncement(data: string[]) {
        return request('option/announcement', {
            method: 'post',
            data: data,
        })
    }
}

export const websiteService = new WebsiteService();