import type { SelectProps } from "antd";
import { metaTags } from "./content";

export const metaTagsOptions: SelectProps['options'] = [
    {
        value: metaTags.category,
        label: '分类',
    },
    {
        value: metaTags.tag,
        label: '标签'
    }
]
