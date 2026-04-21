import { Table } from "antd";
import { useState } from "react";

export default function TableSearchTab() {
    const [dataSource, setDataSource] = useState([
        {
            name: "John",
            age: 32,
            address: "New York"
        },
        {
            name: "Jim",
            age: 33,
            address: "Sydney"
        },
        {
            name: "David",
            age: 40,
            address: "Japan"
        },
        {
            name: "James",
            age: 36,
            address: "New York"
        },
        {
            name: "Sam",
            age: 40,
            address: "Sydney"
        },
    ]);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Age',
            dataIndex: 'age'
        },
        {
            title: 'Address',
            dataIndex: 'address'
        }
    ]

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