import { Form, Modal, Input } from 'antd';
import { websiteService } from '../../../services/website';
import { ISettingOption } from '../../../types/website';

interface IProps {
    visible: boolean
    cancelVisible(): void;
    refresh(): void;
}

export const CreateOptions: React.FC<IProps> = (props) => {
    const [form] = Form.useForm<ISettingOption>()

    const onSubmit = async () => {
        await form.validateFields();
        await websiteService.createSettingOption(form.getFieldsValue());
        props.cancelVisible();
        props.refresh();
    }

    return (
        <Modal open={props.visible} title="新增" onCancel={props.cancelVisible} onOk={onSubmit}>
            <Form form={form} layout="vertical" autoComplete='off'>
                <Form.Item label="key" name="key" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="name" name="name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="value" name="value" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>

    )
}
