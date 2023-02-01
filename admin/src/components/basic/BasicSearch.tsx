/**
 * 搜索查询组件
 */

import { Card, Form, Row, Col, Button, Input } from "antd";
import type { ColProps, FormProps } from 'antd';
import type { IBasicSearchList } from "../../types/basic";

interface IProps {
    /** 卡片标题 */
    title?: string
    /** Form.Item 标签宽度 */
    labelCol?: ColProps,
    /** Form.Item 内容宽度 */
    wrapperCol?: ColProps,
    /** 配置列表 */
    list: IBasicSearchList,
    /** 搜索函数 */
    onSearch: Exclude<FormProps['onFinish'], undefined>,
}


export const BasicSearch: React.FC<IProps> = (props) => {
    const [searchForm] = Form.useForm();
    /** 重置表单 */
    const resetForm = () => {
        searchForm.resetFields();
    }
    const onFinish: FormProps['onFinish'] = (value) => {
        props.onSearch(value);
    }

    return (
        <Card className="mb-5" title={props.title}>
            <Form
                form={searchForm}
                autoComplete="off"
                labelCol={props.labelCol}
                onFinish={onFinish}
            >
                <Row>
                    {
                        props.list.map((item) => {
                            return (
                                <Col span={8} key={item.name}>
                                    <Form.Item label={item.label} name={item.name}>
                                        {item.render}
                                        {/* <Input /> */}
                                    </Form.Item>
                                </Col>
                            )
                        })
                    }

                </Row>
                {/* 操作按钮 */}
                <Row>
                    <Col span={24} className="text-right">
                        <Button className="mr-5" onClick={() => resetForm()}>重置</Button>
                        <Button type="primary" htmlType="submit">查询</Button>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}

// props 处理
const defaultLabelCol: ColProps = {
    style: {
        width: 100,
    }
}
const defaultWrapperCol: ColProps = {
    // span: 18,
}
BasicSearch.defaultProps = {
    labelCol: defaultLabelCol,
    wrapperCol: defaultWrapperCol,
}
