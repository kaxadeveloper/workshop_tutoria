import { Button, Table, Modal } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default function TableCrudTab() {
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            name: 'John',
            email: 'john@gmail.com',
            address: 'John Address'
        },
        {
            id: 2,
            name: 'David',
            email: 'david@gmail.com',
            address: 'David Address'
        },
        {
            id: 3,
            name: 'James',
            email: 'james@gmail.com',
            address: 'James Address'
        },
        {
            id: 4,
            name: 'Sam',
            email: 'sam@gmail.com',
            address: 'Sam Address'
        }
    ])
    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key: '2',
            title: 'Name',
            dataIndex: 'name'
        },
        {
            key: '3',
            title: 'Email',
            dataIndex: 'email'
        },
        {
            key: '4',
            title: 'Address',
            dataIndex: 'address'
        },
        {
            key: '5',
            title: 'Actions',
            render: (record) => {
                return (
                    <>
                        <EditOutlined />
                        <DeleteOutlined onClick={() => {
                            onDeleteStudent(record)
                        }} style={{ color: "red", marginLeft: 12 }} />
                    </>
                );
            },
        },
    ];

    const onAddStudent = () => {
        const randomNumber = parseInt(Math.random() * 1000)
        const newStudent = {
            id: randomNumber,
            name: 'Name ' + randomNumber,
            email: randomNumber + '@gmail.com',
            address: 'Address ' + randomNumber,
        };
        setDataSource(pre => {
            return [...pre, newStudent];
        });
    };
    const onDeleteStudent = (record) => {
        Modal.confirm({
            title: 'Are you sure, you want to delete this student record?',
            onOk: () => {
                setDataSource((pre) => {
                    return pre.filter((student) => student.id !== record.id);
                });
            },
        });
    };
    return (
        <div>
            <Button onClick={onAddStudent}>Add a new Student</Button>
            <Table
                columns={columns}
                dataSource={dataSource}
            ></Table>
        </div>
    )
}