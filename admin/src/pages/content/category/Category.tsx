import { Card, Table, Form, Row, Select, Col, Button, Modal, Input, InputNumber, Popconfirm, } from "antd";
import type { SelectProps, FormProps, FormRule, } from 'antd';
import { metaTags } from "../../../constant/content";
import { ColumnsType } from "antd/es/table";
import { request } from "../../../utils/request";
import { IMetaListResponseItem } from "../../../types/meta";
import { useEffect, useState } from "react";
import { metaService } from "../../../services/meta";

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



export default function ContentCategory() {
    const columns: ColumnsType<IMetaListResponseItem> = [
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
        {
            title: '操作',
            dataIndex: 'operate',
            render: (value, record) => {
                return (
                    <>
                        <Button type="primary" onClick={() => onEditBtn(record)} className="mr-2">编辑</Button>
                        <Popconfirm title="提示" description="删除后所有数据将置为默认" onConfirm={() => onDelBtn(record.id)}>
                            <Button danger>删除</Button>
                        </Popconfirm>

                    </>
                )
            }
        }
    ]

    const [list, setList] = useState<IMetaListResponseItem[]>([])
    const [searchForm] = Form.useForm()
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


    // 新增、编辑弹窗控制
    const [isModalOpen, setModalOpen] = useState(false)
    const openModal = () => {
        editForm.resetFields();
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false)
    }
    const onEditBtn = (data: IMetaListResponseItem) => {
        openModal();
        editForm.setFieldsValue({
            type: data.type,
            slug: data.slug,
            name: data.name,
            order: data.order,
            description: data.description,
        })
    }
    const onDelBtn = async (id: number) => {
        await metaService.deleteMeta(id);
    }

    // 弹窗表单
    const [editForm] = Form.useForm()
    const [submitLoading, setSubmitLoading] = useState(false)

    const onSubmit = async () => {
        await editForm.validateFields()

        setSubmitLoading(true)
        try {
            await metaService.createMeta(editForm.getFieldsValue());
            if (searchForm.getFieldValue('type') === editForm.getFieldValue('type')) {
                fetchData();
            }
            closeModal();
        } finally {
            setSubmitLoading(false)
        }
    }

    return (
        <>
            <Card>
                <Form
                    layout="horizontal"
                    form={searchForm}
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
            {/* 列表 */}
            <Card className="mt-5">
                <div className="mb-5 text-right">
                    <Button type="primary" onClick={openModal}>新增</Button>
                </div>
                <Table columns={columns} dataSource={list} pagination={false} rowKey='id'></Table>
            </Card>
            {/* 新增\编辑弹窗 */}
            <Modal
                open={isModalOpen}
                onCancel={closeModal}
                title="编辑"
                onOk={onSubmit}
                confirmLoading={submitLoading}
            >
                <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} form={editForm} autoComplete={'off'}>
                    <Form.Item
                        label="类别"
                        name={'type'}
                        rules={[
                            {
                                required: true,
                                message: '未填写该项'
                            }
                        ]}
                    >
                        <Select options={metaTagsOptions}></Select>
                    </Form.Item>
                    <Form.Item
                        label="名称"
                        name={'name'}
                        rules={[
                            {
                                required: true,
                                message: '未填写该项'
                            }
                        ]}>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label="缩写" name={'slug'}>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label="描述" name={'description'}>
                        <Input.TextArea></Input.TextArea>
                    </Form.Item>
                    <Form.Item label="权重" name={'order'}>
                        <InputNumber className="w-full"></InputNumber>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}