/** 文章创建或编辑 */

import { Card, Form, Input, Button, message } from "antd"
import MDEditor from '@uiw/react-md-editor';
import { useDebugValue, useEffect, useState } from "react";
import { contentService } from "../../../services/content";
import { useNavigate, useSearchParams } from "react-router-dom";

export const ArticleEdit: React.FC = () => {
    const [form] = Form.useForm()
    let [content, setContent] = useState('');

    let id = 0
    const [params] = useSearchParams()
    const paramId = params.get('id');
    if (typeof paramId === 'string' && /^\d+$/.test(paramId)) {
        id = +paramId
    }

    const navigate = useNavigate();

    const onSubmit = async (value: any) => {
        if (id) {
            await contentService.updateArticle(id, {
                ...value,
                categories: [],
                tags: [],
            });
        } else {
            await contentService.addArticle({
                ...value,
                categories: [],
                tags: [],
            });
        }

        message.success('提交成功')
        navigate('/content/article')
    }

    const fetchData = async (id: number) => {
        const data = await contentService.getArticleDetail(id);
        form.setFieldsValue(data);
    }


    useEffect(() => {
        if (id) {
            fetchData(+id);
        }


    }, [])

    return (
        <Card>
            <Form form={form} onFinish={onSubmit}>
                <Form.Item label="标题" name='title'>
                    <Input />
                </Form.Item>
                <Form.Item label="正文" name="text">
                    <MDEditor
                        value={content}
                        onChange={(value) => setContent(value || '')}
                    ></MDEditor>
                </Form.Item>
                <Form.Item label="摘要" name="summary">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item>
                    <div className="text-right">
                        <Button type="primary" htmlType="submit">提交</Button>
                    </div>
                </Form.Item>
            </Form>
        </Card>
    )
}
