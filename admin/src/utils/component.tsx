import { Input } from "antd";
import type { IBasicFormItem } from "../types/basic";

export const componentList = {
    text: <Input/>
}

/** 根据名称获取 form 组件 */
export function getComponent(config: IBasicFormItem) {
    if (config.type === 'custom') {
        return config.render || <></>
    }
    return componentList[config.type] || <></>
}
