import { Card, Button } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BasicSearch } from "../../../components/basic/BasicSearch";
import { BasicTable } from "../../../components/basic/BasicTable";
import { contentService } from "../../../services/content";
import { IArticleResponseItem } from "../../../types/content";
import { withCancelToken } from "../../../utils/request";
import { listConfig, searchConfig } from "./config";


export const ArticlePage: React.FC = () => {
    const columns: ColumnsType<IArticleResponseItem> = [
        ...listConfig,
        {
            title: '操作',
            dataIndex: 'operate',
            fixed: 'right',
            render: (_, record) => {
                return (
                    <>
                        <Button type="primary" onClick={() => onEdit(record.id)}>编辑</Button>
                        <Button danger onClick={() => onDelete(record.id)}>删除</Button>
                    </>
                )
            }
        }
    ]

    // 搜索组件部分
    const onSearch = (value: any) => {
        console.log('article search', value)
    };

    const navigator = useNavigate();
    const onEdit = (id?: number) => {
        if (id) {
            return navigator(`edit?id=${id}`);
        }
        navigator('edit')
    }
    const onDelete = async (id: number) => {
        await contentService.deleteArticle(id)
        fetchData();
    }


    const [listData, setListData] = useState<IArticleResponseItem[]>([])
    const query = {
        page: 1,
        size: 10,
    }
    const [fetchListData] = withCancelToken(contentService.getArticlePage.bind(contentService))
    const fetchData = async () => {
        const res = await fetchListData(query);
        setListData(res!);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            {/* 搜索部分 */}
            <BasicSearch
                list={searchConfig}
                onSearch={onSearch}
            ></BasicSearch>
            {/* 列表 */}
            <BasicTable
                onCreate={() => onEdit}
                columns={columns}
                dataSource={listData}
                scroll={{ x: true }}
            ></BasicTable>
        </>
    )
}
