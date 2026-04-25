import { Table } from "antd";
import { useEffect, useState } from "react";

export default function TablePaginationTab() {
    const [dataSource, setDataSource] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

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
                setDataSource(response.data)
                setTotalPages(response.totalPages)
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