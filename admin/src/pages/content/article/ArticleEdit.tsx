/** 文章创建或编辑 */

import { Card, Form, Input, Button, message, Select, SelectProps, Divider } from "antd"
import MDEditor from '@uiw/react-md-editor';
import { useEffect, useState } from "react";
import { contentService } from "../../../services/content";
import { useNavigate, useSearchParams } from "react-router-dom";
import { metaService } from "../../../services/meta";
import { metaTags } from "../../../constant/content";
import { SelectAddItem } from "./components/SelectAddItem";

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
            await contentService.updateArticle(id, value);
        } else {
            await contentService.addArticle(value);
        }

        message.success('提交成功')
        navigate('/content/article')
    }

    const fetchData = async (id: number) => {
        const data = await contentService.getArticleDetail(id);
        const newData: Record<string, any> = { ...data };
        newData.categories = data.categories.map(item => item.id);
        newData.tags = data.tags.map(item => item.id);
        form.setFieldsValue(newData);
    }

    // 分类与标签
    const [tags, setTags] = useState<SelectProps['options']>([])
    const [categories, setCategories] = useState<SelectProps['options']>([])
    const fetchTagsAndCategories = async () => {
        const tagsPromise = metaService.getMetaList(metaTags.tag);
        const categoriesPromise = metaService.getMetaList(metaTags.category);

        const [tagsResponse, categoriesResponse] = await Promise.all([tagsPromise, categoriesPromise]);
        setTags(tagsResponse.map(tag => ({
            value: tag.id,
            label: tag.name,
        })));
        setCategories(categoriesResponse.map(category => ({
            value: category.id,
            label: category.name,
        })));
    }
    // 新增分类和标签
    const addCategory = async (value: string) => {
        await metaService.createMeta({
            name: value,
            type: metaTags.category
        })
        await fetchTagsAndCategories();
    };
    const addTags = async (value: string) => {
        await metaService.createMeta({
            name: value,
            type: metaTags.tag
        })
        await fetchTagsAndCategories();
    }

    useEffect(() => {
        if (id) {
            fetchData(+id);
        }
        fetchTagsAndCategories();
    }, [])

    return (
        <Card>
            <Form form={form} onFinish={onSubmit} labelCol={{ span: 4 }}>
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
                <Form.Item label="封面图" name="cover">
                    <Input />
                </Form.Item>
                <Form.Item label="分类" name="categories">
                    <Select mode="tags" options={categories}
                        dropdownRender={(menu) => SelectAddItem(menu, {
                            request: addCategory
                        })}
                    ></Select>
                </Form.Item>
                <Form.Item label="标签" name="tags">
                    <Select mode="tags" options={tags}
                        dropdownRender={(menu) => SelectAddItem(menu, {
                            request: addTags
                        })}
                    ></Select>
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
