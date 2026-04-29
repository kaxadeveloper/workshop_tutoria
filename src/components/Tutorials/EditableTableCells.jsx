import { Button, Table } from "antd";
import { useState } from "react";

export default function EditableTableCellsTab() {
    const [dataSource, setDataSource] = useState([]);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Address',
            dataIndex: 'address'
        },
        {
            title: 'Actions',
            render: (_, record) => {
                return
                <>
                    <Button>Edit</Button>
                    <Button>Save</Button>
                </>
            }
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={dataSource}
            >

            </Table>
        </div>
    );
}