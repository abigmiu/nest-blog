import { Card, Form, Row, Col, Input, Button } from "antd";
import { BasicSearch } from "../../../components/basic/BasicSearch";
import { searchConfig } from "./config";

export const ArticlePage: React.FC = () => {
    // 搜索组件部分
    const [searchForm] = Form.useForm();
    const onSearch = (value: any) => {
        console.log('article search', value)
     };

    return (
        <>
            <BasicSearch
                list={searchConfig}
                onSearch={onSearch}
            ></BasicSearch>
            {/* 搜索页 */}
            <Card>

                <Form
                    layout="horizontal"
                    form={searchForm}
                    onFinish={onSearch}
                >
                    <Row gutter={24}>
                        <Col span={8}>
                            <Form.Item label="标题关键字" name="keyword">
                                <Input></Input>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24} className="text-right">
                            <Button className="mr-5">重置</Button>
                            <Button type="primary" htmlType="submit">查询</Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
            {/* 列表 */}
            <Card className="mt-5">
                <div className="mb-5 text-right">
                    <Button type="primary">新增</Button>
                </div>
            </Card>
        </>
    )
}
