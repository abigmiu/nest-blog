/** 文章创建或编辑 */

import { Card, Form, Input, Button, message } from "antd"
import MDEditor from '@uiw/react-md-editor';
import { useState } from "react";
import { contentService } from "../../../services/content";

export const ArticleEdit: React.FC = () => {
    const [form] = Form.useForm()
    let [content, setContent] = useState('');

    const onSubmit = async (value: any) => {
        await contentService.addArticle({
            ...value,
            categories: [],
            tags: [],
        });
        message.success('提交成功')
    }

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
                <Form.Item>
                    <div className="text-right">
                        <Button type="primary" htmlType="submit">提交</Button>
                    </div>
                </Form.Item>
            </Form>
        </Card>
    )
}
