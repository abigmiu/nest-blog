import { ColumnsType } from "antd/es/table"
import { useEffect, useState } from "react"
import { Button } from 'antd'
import { BasicTable } from "../../../components/basic/BasicTable"
import { IWallpaperResponseItem } from "../../../types/content"
import { request } from "../../../utils/request"
import { listConfig } from './config'
import { CreateWallpaper } from "./CreateWallpaper"

export const WallpaperPage: React.FC = () => {

    const columns: ColumnsType<IWallpaperResponseItem> = [
        ...listConfig,
        {
            title: '操作',
            dataIndex: 'operate',
            render: (_, record, index) => {
                return (
                    <>
                        <Button type="primary" onClick={() => toggleFreeze(record.id, index)} danger={!record.freeze}>
                            {record.freeze ? '解冻' : '冻结'}
                        </Button>
                    </>
                )
            }
        }
    ]

    const [listData, setListData] = useState<IWallpaperResponseItem[]>([])

    const fetchData = async () => {
        const res = await request<IWallpaperResponseItem[]>('content/wallpaper/page')
        setListData(res);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const [visible, setVisible] = useState(false)
    const cancelVisible = () => {
        setVisible(false)
    }
    const onCreate = () => {
        cancelVisible();
        fetchData();
    }

    const toggleFreeze = async (id: number, index: number) => {
        await request(`content/wallpaper/freeze/${id}`, {
            method: 'PUT'
        })
        const copiedList = [...listData];
        copiedList[index].freeze = !copiedList[index].freeze;
        setListData(copiedList);
    }

    return (
        <>
            <BasicTable
                columns={columns}
                dataSource={listData}
                pagination={false}
                onCreate={() => setVisible(true)}
            ></BasicTable>

            <CreateWallpaper
                visible={visible}
                cancelVisible={cancelVisible}
                confirm={onCreate}
            ></CreateWallpaper>
        </>
    )
}
