import { Card, Form, Input, Button, message } from "antd"
import { useEffect, useState } from "react";
import { websiteService } from "../../../services/website";
import { ISettingOption } from '../../../types/website'
import { CreateOptions } from "./CreateOptions";

export const SettingPage: React.FC = () => {
    const [formData] = Form.useForm();
    const [options, setOptions] = useState<ISettingOption[]>([])

    const fetchData = async () => {
        const data = await websiteService.getSettingOptions();
        setOptions(data);
        const value: Record<string, string> = data.reduce((pre, curr) => {
            pre[curr.key] = curr.value
            return pre;
        }, {} as Record<string, string>)
        formData.setFieldsValue(value);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const [dialogVisible, setDialogVisible] = useState(false)

    const onSubmit = async () => {
        await websiteService.updateSettingOptions(formData.getFieldsValue());
        message.success('更新成功');
    }

    return (
        <Card title="网站设置">
            <div className="mt-5 mb-5 text-right">
                <Button type="primary" onClick={() => setDialogVisible(true)}>新增</Button>
            </div>

            <Form form={formData} layout="vertical">
                {
                    options.map((option) => {
                        return (
                            <Form.Item label={option.name} name={option.key}>
                                <Input></Input>
                            </Form.Item>
                        )
                    })
                }
            </Form>

            <div className="mt-5 mb-5 text-right">
                <Button type="primary" onClick={onSubmit}>提交</Button>
            </div>

            <CreateOptions
                visible={dialogVisible}
                cancelVisible={() => setDialogVisible(false)}
                refresh={() => fetchData()}
            ></CreateOptions>
        </Card>
    )
}
