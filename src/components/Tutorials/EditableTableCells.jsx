import { Button, Table } from "antd";
import { useEffect, useState } from "react";

export default function EditableTableCellsTab() {
    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        const data = [];
        for (let index = 0; index < 7; index++) {
           data.push({
            key:`${index}`,
            name:`Name ${index}`,
            address:`Address ${index}`
           })
        }
        setDataSource(data);
    }, []);

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