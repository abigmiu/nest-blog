import { Form, Modal, Input, Select } from "antd";
import { IWallpaperCreate } from "../../../types/content";

import type { SelectProps } from 'antd';
import { request } from "../../../utils/request";

interface IProps {
    visible: boolean;
    cancelVisible(): void;
    confirm(): void;
}

export const CreateWallpaper: React.FC<IProps> = (props) => {
    const [form] = Form.useForm<IWallpaperCreate>()

    const options: SelectProps['options'] = []

    const onSubmit = async () => {
        const values = form.getFieldsValue();
        await request('content/wallpaper', {
            method: 'POST',
            data: values,
        });
        form.resetFields();
        props.confirm();
    }

    return (
        <Modal
            open={props.visible}
            title="新增"
            onCancel={props.cancelVisible}
            onOk={onSubmit}
        >
            <Form form={form} layout="vertical" autoComplete="false">
                <Form.Item label="备注" name="remark">
                    <Input />
                </Form.Item>
                <Form.Item label="url" name="url">
                    <Input />
                </Form.Item>
                <Form.Item label="标签" name="tags">
                    <Select
                        mode="tags"
                        style={{ width: '100%' }}
                        options={options}
                    />
                </Form.Item>
            </Form>

        </Modal>
    )
}
