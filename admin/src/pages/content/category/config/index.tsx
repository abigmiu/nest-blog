import { Select } from "antd";
import { ColumnsType } from "antd/es/table";
import { metaTagsOptions } from "../../../../constant/meta";
import { IBasicSearchList } from "../../../../types/basic";
import { IMetaListResponseItem } from "../../../../types/meta";

export const searchConfig: IBasicSearchList = [
    {
        label: '类别',
        name: 'type',
        render: <Select options={metaTagsOptions}></Select>
    }
]

export const listConfig: ColumnsType<IMetaListResponseItem> = [
    {
        title: '名称',
        dataIndex: 'name',
    },
    {
        title: '缩写',
        dataIndex: 'slug',
    },
    {
        title: '描述',
        dataIndex: 'description',
    },
    {
        title: '统计',
        dataIndex: 'count',
    },
    {
        title: '排序',
        dataIndex: 'order',
    },
    {
        title: '父级分类',
        dataIndex: 'parentName',
    },

]
