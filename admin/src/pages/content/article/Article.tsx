import { Card, Form, Row, Col, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { BasicSearch } from "../../../components/basic/BasicSearch";
import { searchConfig } from "./config";

export const ArticlePage: React.FC = () => {
    // 搜索组件部分
    const onSearch = (value: any) => {
        console.log('article search', value)
    };

    const navigator = useNavigate();
    const onAdd = () => {
        navigator('edit')
    }

    return (
        <>
            {/* 搜索部分 */}
            <BasicSearch
                list={searchConfig}
                onSearch={onSearch}
            ></BasicSearch>
            {/* 列表 */}
            <Card className="mt-5">
                <div className="mb-5 text-right">
                    <Button type="primary" onClick={onAdd}>新增</Button>
                </div>
            </Card>
        </>
    )
}
