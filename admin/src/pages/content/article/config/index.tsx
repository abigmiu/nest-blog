import type { IBasicSearchList } from "../../../../types/basic";
import { Input } from 'antd';

export const searchConfig: IBasicSearchList = [
    {
        label: '标题关键字',
        name: 'key',
        render: <Input />
    }
]
