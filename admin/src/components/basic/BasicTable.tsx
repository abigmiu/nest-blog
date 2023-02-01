import { ButtonProps, Card, Table } from 'antd'
import type { TableProps } from 'antd';
import { Button } from 'antd'

interface IProps extends TableProps<any> {
    cardTitle?: string;
    showCreate?: boolean;
    onCreate?: ButtonProps['onClick']
}

export const BasicTable: React.FC<IProps> = (props) => {
    return (
        <Card
            title={props.cardTitle}
        >
            {
                props.showCreate && (
                    <div className="mb-5 text-right">
                        <Button type="primary" onClick={props.onCreate}>新增</Button>
                    </div>
                )
            }

            <Table {...props} rowKey='id'></Table>
        </Card>
    )
}

BasicTable.defaultProps = {
    showCreate: true,
}
