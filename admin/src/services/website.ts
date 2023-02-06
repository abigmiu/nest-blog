import { ISettingOption } from "../types/website";
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

    /** 获取设置选项 */
    getSettingOptions() {
        return request<ISettingOption[]>('option/setting');
    }

    /** 新增设置选项 */
    createSettingOption(data: ISettingOption) {
        return request('option/setting', {
            method: 'POST',
            data,
        })
    }

    /** 更新所有设置项 */
    updateSettingOptions(data: ISettingOption[]) {
        return request('option/setting', {
            method: 'PUT',
            data,
        })
    }
}

export const websiteService = new WebsiteService();
