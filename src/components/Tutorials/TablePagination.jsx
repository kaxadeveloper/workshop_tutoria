import { Table } from "antd";
import { useState } from "react";

export default function TablePaginationTab() {
    const [dataSource, setDataSource] = useState([]);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id'
        },
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Trips',
            dataIndex: 'trips'
        }
    ]
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Table
                columns={columns}
                dataSource={dataSource}
            >

            </Table>
        </div>
    );
}