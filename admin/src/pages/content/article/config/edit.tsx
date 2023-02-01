import { Input } from "antd";
import { IBasicFormEditList } from "../../../../types/basic";
import MarkDown from 'react-markdown'

export const editFormConfig: IBasicFormEditList = [
    {
        label: '标题',
        name: 'title',
        render: <Input />
    },
    {
        label: '正文',
        name: 'text',
        render: <Input />
    }
]
