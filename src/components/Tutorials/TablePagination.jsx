import { Table } from "antd";
import { useEffect, useState } from "react";

export default function TablePaginationTab() {
    const [dataSource, setDataSource] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchRecords(1);
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

    const fetchRecords = (page) => {
        setLoading(true);
        fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`).then((res) => {
            res.json().then((response) => {
                setDataSource(response.data);
                setTotalPages(response.totalPages);
                setLoading(false);
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
                loading={loading}
                columns={columns}
                dataSource={dataSource}
                pagination = {{
                    pageSize: 10,
                    total: totalPages,
                    onChange:(page) => {
                      fetchRecords(page)
                    }
                }}
            >

            </Table>
        </div>
    );
}