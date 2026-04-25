import { Table } from "antd";
import { useEffect, useState } from "react";

export default function TablePaginationTab() {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        fetchRecords()
    }, [])

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
    ];

    const fetchRecords = () => {
        fetch("https://api.instantwebtools.net/v1/passenger?page=0&size=10").then((res) => {
            res.json().then((response) => {
                
                console.log(response);
            });
        }
        );
    };

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