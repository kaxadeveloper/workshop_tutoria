import { Table } from "antd";
import { useState } from "react";

export default function TableSearchTab(){
    const [dataSource, setDataSource] = useState([]);
    const columns = [
        {
            title:'Name',
            dataIndex:'name'
        },
        {
            title:'Age',
            dataIndex:'age'
        },
        {
            title:'Address',
            dataIndex:'address'
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