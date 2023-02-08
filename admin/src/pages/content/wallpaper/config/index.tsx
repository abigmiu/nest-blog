import { Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { IWallpaperResponseItem } from "../../../../types/content";

export const listConfig: ColumnsType<IWallpaperResponseItem> = [
    {
        title: '备注',
        dataIndex: 'remark'
    },
    {
        title: '标签',
        dataIndex: 'tags',
        render: (value: string[]) => {
            return (
                <div>
                    {
                        value.map(tag => (
                            <Tag>{tag}</Tag>
                        ))
                    }
                </div>
            )
        }
    },
    {
        title: '图像',
        dataIndex: 'url',
        render: (value: string) => {
            return (
                <img src={value} />
            )
        }
    },
    {
        title: '是否冻结',
        dataIndex: 'freeze',
        render: (value: boolean) => {
            return (
                <div>
                    {
                        value ? <Tag>已冻结</Tag> : <Tag>未冻结</Tag>
                    }
                </div>
            )
        }
    }
]
