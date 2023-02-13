import { Divider, SelectProps, Input, Button, InputRef, ButtonProps, Space, InputProps } from 'antd'
import { ReactEventHandler, useRef, useState } from 'react'

type IDropdownRender = NonNullable<SelectProps['dropdownRender']>

interface IProps {
    request(value: string): Promise<void> | void
}

export const SelectAddItem = (menus: React.ReactElement, props: IProps) => {
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState('')
    const inputRef = useRef<InputRef>(null)

    const onChange: InputProps['onChange'] = (e) => {
        setValue(e.target.value);
    }

    const onConfirm: ButtonProps['onClick'] = async (e) => {
        setLoading(true)
        try {
            await props.request(value);
            setValue('');
        } finally {
            setLoading(false)
        }
        e.stopPropagation();
    }

    return (
        <>
            {menus}
            <Divider style={{ margin: '8px 0' }}></Divider>
            <Space style={{ padding: '0 8px 4px' }}>

                <Input ref={inputRef} value={value} onChange={ onChange} />
                <Button type='primary' loading={loading} onClick={onConfirm}>添加</Button>
            </Space>

        </>
    )
}
