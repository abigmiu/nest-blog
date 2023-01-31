import type { ReactElement } from "react";
import { componentList } from "../utils/component";

export interface IBasicFormItem {
    label: string;
    name: string;
    type: IComponentListKey;
    render?: ReactElement;
}

/** 搜索组件 list */
export interface IBasicSearchListItem extends IBasicFormItem {

}
export type IBasicSearchList = Array<IBasicSearchListItem>

/** getComponent 组件的键 */
export type IComponentListKey = keyof typeof componentList | 'custom';
