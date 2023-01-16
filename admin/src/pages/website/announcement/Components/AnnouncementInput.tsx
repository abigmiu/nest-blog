import { Input, Button, } from "antd";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { IAnnouncementState } from "../../../../types/website";

interface IProps {
    propState: IAnnouncementState;
    addItem: (id: number) => void;
    deleteItem: (id: number) => void;
    enableMinus: boolean;
    onChange: (id: number, value: string) => void;
}
export default function AnnouncementInput(props: IProps) {
    const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange(props.propState.id, e.currentTarget.value);
    }

    return (
        <div className="flex mb-5">
            <Button
                icon={<MinusOutlined />}
                disabled={!props.enableMinus}
                onClick={() => {
                    props.deleteItem(props.propState.id)
                }}
                tabIndex={-1}
            ></Button>
            <Input.TextArea className="mx-2" onChange={onInputChange}></Input.TextArea>
            <Button
                icon={<PlusOutlined />}
                onClick={() => {
                    props.addItem(props.propState.id)
                }}
                tabIndex={-1}
            ></Button>
        </div>

    )
}