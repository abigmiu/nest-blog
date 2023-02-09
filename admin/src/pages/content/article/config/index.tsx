import type { IBasicSearchList } from "../../../../types/basic";
import { Input } from 'antd';
import { ColumnsType } from "antd/es/table";
import { IArticleResponseItem } from "../../../../types/content";

export const searchConfig: IBasicSearchList = [
    {
        label: '标题关键字',
        name: 'key',
        render: <Input />
    }
]

export const listConfig: ColumnsType<IArticleResponseItem> = [
    {
        title: '标题',
        dataIndex: 'title',
    },
    {
        title: '创建时间',
        dataIndex: 'createAt',
    },
    {
        title: '更新时间',
        dataIndex: 'updateAt',
    },
    {
        title: '摘要',
        dataIndex: 'summary',
    },
    {
        title: '缩写',
        dataIndex: 'slug',
    },
    {
        title: '排序',
        dataIndex: 'order',
    },
    {
        title: '类型',
        dataIndex: 'type'
    },
    {
        title: '状态',
        dataIndex: 'status',
    },
    {
        title: '评论数',
        dataIndex: 'commentsNum',
    },
    {
        title: '开启评论',
        dataIndex: 'allowComment'
    }
]
