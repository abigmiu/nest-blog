import { Input, Button, } from "antd";
import type { InputRef } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { IAnnouncementState } from "../../../../types/website";
import { useEffect, useRef } from "react";

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

    // 每次只能新增一个。 所以在子组件里面自动 focus
    const inputRef = useRef<InputRef>(null);
    useEffect(() => {
        inputRef.current!.focus();
    }, [])

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
            <Input.TextArea
                className="mx-2"
                onChange={onInputChange}
                ref={inputRef}
            ></Input.TextArea>
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