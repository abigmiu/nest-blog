import { Card, Table, Form, Row, Select, Col, Button, } from "antd";
import type { SelectProps, FormProps } from 'antd';
import { metaTags } from "../../../constant/content";
import { ColumnsType } from "antd/es/table";
import { request } from "../../../utils/request";
import { IMetaListResponseItem } from "../../../types/meta";
import { useEffect, useState } from "react";

const metaTagsOptions: SelectProps['options'] = [
    {
        value: metaTags.category,
        label: '分类',
    },
    {
        value: metaTags.tag,
        label: '标签'
    }
]

let initSearch = {
    type: metaTags.category
}

const columns: ColumnsType<IMetaListResponseItem> = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '缩写',
        dataIndex: 'slug',
        key: 'slug',
    },
    {
        title: '描述',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: '统计',
        dataIndex: 'count',
        key: 'count',
    },
    {
        title: '排序',
        dataIndex: 'order',
        key: 'order',
    },
    {
        title: '父级分类',
        dataIndex: 'parentName',
        key: 'parentName',
    }
]

export default function ContentCategory() {

    const [list, setList] = useState<IMetaListResponseItem[]>([])
    const [form] = Form.useForm()
    const onFinish: FormProps['onFinish'] = (value) => {
        initSearch = value;
        fetchData();
    }

    const fetchData = async () => {
        const res = await request<IMetaListResponseItem[]>('meta', {
            params: initSearch
        });
        res.forEach(item => {
            item.parentName = getParentName(item.parentId, res);
        });

        setList(res);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const getParentName = (parentId: number, list: IMetaListResponseItem[]) => {
        if (parentId === 0) {
            return '';
        }

        const index = list.findIndex((metaItem) => metaItem.id = parentId);
        if (index !== -1) {
            return list[index].name;
        }
        return ''
    }

    return (
        <>
            <Card>
                <Form
                    layout="horizontal"
                    form={form}
                    onFinish={onFinish}
                    initialValues={initSearch}
                >
                    <Row gutter={24}>
                        <Col span={8}>
                            <Form.Item label="类别" name='type'>
                                <Select
                                    options={metaTagsOptions}
                                ></Select>
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

            <Card className="mt-5">
                <Table columns={columns} dataSource={list} pagination={false}></Table>
            </Card>
        </>
    )
}
