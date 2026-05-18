import {
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
  } from "@ant-design/icons";
  import {
    Button,
    Input,
    Modal,
    Space,
    Table,
    Tag,
    Form,
    message,
  } from "antd";
  import { useMemo, useState } from "react";
  
  export default function GlobalSearchTab() {
    const [searchedText, setSearchedText] = useState("");
    const [editingUser, setEditingUser] = useState(null);
    const [form] = Form.useForm();
  
    const [dataSource, setDataSource] = useState([
      {
        key: 1,
        name: "David",
        age: 22,
        address: "New York",
        status: "Active",
      },
      {
        key: 2,
        name: "John",
        age: 30,
        address: "London",
        status: "Inactive",
      },
      {
        key: 3,
        name: "Sarah",
        age: 27,
        address: "Paris",
        status: "Active",
      },
      {
        key: 4,
        name: "Emma",
        age: 19,
        address: "Berlin",
        status: "Pending",
      },
    ]);
  
    // Dynamic statistics
    const statistics = useMemo(() => {
      return {
        total: dataSource.length,
        active: dataSource.filter((item) => item.status === "Active").length,
        inactive: dataSource.filter((item) => item.status === "Inactive").length,
      };
    }, [dataSource]);
  
    // Delete row
    const handleDelete = (record) => {
      Modal.confirm({
        title: "Delete User",
        content: `Are you sure you want to delete ${record.name}?`,
        okText: "Yes",
        okType: "danger",
        onOk: () => {
          setDataSource((pre) =>
            pre.filter((item) => item.key !== record.key)
          );
          message.success("User deleted successfully");
        },
      });
    };
  
    // Edit row
    const handleEdit = (record) => {
      setEditingUser(record);
      form.setFieldsValue(record);
    };
  
    // Save edited row
    const handleSave = (values) => {
      setDataSource((pre) =>
        pre.map((item) => {
          if (item.key === editingUser.key) {
            return { ...item, ...values };
          }
          return item;
        })
      );
  
      message.success("User updated successfully");
      setEditingUser(null);
    };
  
    return (
      <div
        style={{
          padding: 20,
        }}
      >
        {/* Header */}
        <h1>User Management Dashboard</h1>
  
        {/* Statistics */}
        <Space
          size={20}
          style={{
            marginBottom: 20,
          }}
        >
          <Tag color="blue">Total Users: {statistics.total}</Tag>
          <Tag color="green">Active: {statistics.active}</Tag>
          <Tag color="red">Inactive: {statistics.inactive}</Tag>
        </Space>
  
        {/* Search */}
        <Input
          placeholder="Search name, age or address..."
          prefix={<SearchOutlined />}
          allowClear
          size="large"
          style={{
            marginBottom: 20,
            maxWidth: 400,
          }}
          onChange={(e) => {
            setSearchedText(e.target.value);
          }}
        />
  
        {/* Table */}
        <Table
          bordered
          pagination={{
            pageSize: 5,
          }}
          rowClassName={(record) =>
            record.status === "Inactive" ? "inactive-row" : ""
          }
          columns={[
            {
              title: "Name",
              dataIndex: "name",
              sorter: (a, b) => a.name.localeCompare(b.name),
              filteredValue: [searchedText],
              onFilter: (value, record) => {
                return (
                  String(record.name)
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  String(record.age)
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  String(record.address)
                    .toLowerCase()
                    .includes(value.toLowerCase())
                );
              },
            },
            {
              title: "Age",
              dataIndex: "age",
              sorter: (a, b) => a.age - b.age,
            },
            {
              title: "Address",
              dataIndex: "address",
            },
            {
              title: "Status",
              dataIndex: "status",
              render: (status) => {
                let color = "blue";
  
                if (status === "Active") color = "green";
                if (status === "Inactive") color = "red";
                if (status === "Pending") color = "orange";
  
                return <Tag color={color}>{status}</Tag>;
              },
              filters: [
                {
                  text: "Active",
                  value: "Active",
                },
                {
                  text: "Inactive",
                  value: "Inactive",
                },
                {
                  text: "Pending",
                  value: "Pending",
                },
              ],
              onFilter: (value, record) => record.status === value,
            },
            {
              title: "Actions",
              render: (_, record) => {
                return (
                  <Space>
                    <Button
                      icon={<EditOutlined />}
                      type="primary"
                      onClick={() => {
                        handleEdit(record);
                      }}
                    >
                      Edit
                    </Button>
  
                    <Button
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => {
                        handleDelete(record);
                      }}
                    >
                      Delete
                    </Button>
                  </Space>
                );
              },
            },
          ]}
          dataSource={dataSource}
        />
  
        {/* Edit Modal */}
        <Modal
          open={editingUser !== null}
          title="Edit User"
          okText="Save"
          onCancel={() => {
            setEditingUser(null);
          }}
          onOk={() => {
            form.submit();
          }}
        >
          <Form form={form} layout="vertical" onFinish={handleSave}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter name",
                },
              ]}
            >
              <Input />
            </Form.Item>
  
            <Form.Item
              label="Age"
              name="age"
              rules={[
                {
                  required: true,
                  message: "Please enter age",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
  
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please enter address",
                },
              ]}
            >
              <Input />
            </Form.Item>
  
            <Form.Item
              label="Status"
              name="status"
              rules={[
                {
                  required: true,
                  message: "Please enter status",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }