import { Select } from "antd";
import { metaTagsOptions } from "../../../../constant/meta";
import { IBasicSearchList } from "../../../../types/basic";

export const searchConfig: IBasicSearchList = [
    {
        label: '类别',
        name: 'type',
        render: <Select options={metaTagsOptions}></Select>
    }
]
