import type { InputProps, SelectProps } from "antd";
import type { ReactElement, ReactNode } from "react";

export interface IBasicFormItem {
    label: string;
    name: string;
    render: ReactElement;
}

export type IBasicFormProps = InputProps | SelectProps

/** 搜索组件 list */
export interface IBasicSearchListItem extends IBasicFormItem {

}
export type IBasicSearchList = Array<IBasicSearchListItem>

/** 表单组件 list */
export interface IBasicFormEditListItem extends IBasicFormItem {

}
export type IBasicFormEditList = Array<IBasicFormEditListItem>

type NonNullable<T> = T extends null | undefined ? never : T;
