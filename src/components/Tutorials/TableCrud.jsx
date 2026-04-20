import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function TableCrudTab() {
    const [isEditing, setIsEditing] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [dataSource, setDataSource] = useState([
        { id: 1, name: "John", email: "john@gmail.com", address: "John Address" },
        { id: 2, name: "David", email: "david@gmail.com", address: "David Address" },
        { id: 3, name: "James", email: "james@gmail.com", address: "James Address" },
        { id: 4, name: "Sam", email: "sam@gmail.com", address: "Sam Address" },
    ]);

    const columns = [
        { key: "1", title: "ID", dataIndex: "id" },
        { key: "2", title: "Name", dataIndex: "name" },
        { key: "3", title: "Email", dataIndex: "email" },
        { key: "4", title: "Address", dataIndex: "address" },
        {
            key: "5",
            title: "Actions",
            render: (record) => {
                return (
                    <>
                        <EditOutlined
                            style={{ cursor: "pointer" }}
                            onClick={() => onEditStudent(record)}
                        />
                        <DeleteOutlined
                            style={{ color: "red", marginLeft: 12, cursor: "pointer" }}
                            onClick={() => onDeleteStudent(record)}
                        />
                    </>
                );
            },
        },
    ];

    const onAddStudent = () => {
        const randomNumber = Math.floor(Math.random() * 1000);
        const newStudent = {
            id: randomNumber,
            name: "Name " + randomNumber,
            email: randomNumber + "@gmail.com",
            address: "Address " + randomNumber,
        };
        setDataSource((prev) => [...prev, newStudent]);
    };

    const onDeleteStudent = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this student record?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                setDataSource((prev) =>
                    prev.filter((student) => student.id !== record.id)
                );
            },
        });
    };

    const onEditStudent = (record) => {
        setIsEditing(true);
        setEditingStudent({ ...record });
    };

    const resetEditing = () => {
        setIsEditing(false);
        setEditingStudent(null);
    };

    return (
        <div>
            <Button onClick={onAddStudent} style={{ marginBottom: 16 }}>
                Add a new Student
            </Button>

            <Table
                columns={columns}
                dataSource={dataSource}
                rowKey="id"
            />

            <Modal
                title="Edit Student"
                open={isEditing}   // ✅ FIXED
                okText="Save"
                onCancel={resetEditing}
                onOk={() => {
                    setDataSource((prev) =>
                        prev.map((student) =>
                            student.id === editingStudent.id
                                ? editingStudent
                                : student
                        )
                    );
                    resetEditing();
                }}
            >
                <Input
                    style={{ marginBottom: 10 }}
                    value={editingStudent?.name}
                    onChange={(e) =>
                        setEditingStudent((prev) => ({
                            ...prev,
                            name: e.target.value,
                        }))
                    }
                />
                <Input
                    style={{ marginBottom: 10 }}
                    value={editingStudent?.email}
                    onChange={(e) =>
                        setEditingStudent((prev) => ({
                            ...prev,
                            email: e.target.value,
                        }))
                    }
                />
                <Input
                    value={editingStudent?.address}
                    onChange={(e) =>
                        setEditingStudent((prev) => ({
                            ...prev,
                            address: e.target.value,
                        }))
                    }
                />
            </Modal>
        </div>
    );
}