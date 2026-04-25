import { Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TablePaginationTab() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  useEffect(() => {
    fetchRecords(1);
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];

  const fetchRecords = async (page) => {
    try {
      setLoading(true);

      // skip used for pagination
      const skip = (page - 1) * 10;

      const res = await axios.get(
        `https://dummyjson.com/users?limit=10&skip=${skip}`
      );

      setDataSource(res.data.users);

      setPagination({
        current: page,
        pageSize: 10,
        total: res.data.total,
      });

      setLoading(false);

    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <Table
        rowKey="id"
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={pagination}
        onChange={(pagination) => {
          fetchRecords(pagination.current);
        }}
      />
    </div>
  );
}