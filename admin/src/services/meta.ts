import { ICreateMetaRequest } from "../types/meta";
import { request } from "../utils/request";

class MetaService {
    private prefix = 'meta'

    /** 创建 meta */
    createMeta(data: ICreateMetaRequest) {
        return request(this.prefix, {
            method: 'POST',
            data,
        })
    }

    /** 删除 meta */
    deleteMeta(id: number) {
        return request(`${this.prefix}/${id}`, {
            method: 'DELETE',
        })
    }
}

export const metaService = new MetaService()
