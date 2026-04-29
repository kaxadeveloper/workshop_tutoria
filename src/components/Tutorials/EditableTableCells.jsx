import { Button, Form, Input, Table } from "antd";
import { useEffect, useState } from "react";

export default function EditableTableCellsTab() {
    const [dataSource, setDataSource] = useState([]);
    const [editingRow, setEditingRow] = useState(null);

    useEffect(() => {
        const data = [];
        for (let index = 0; index < 7; index++) {
            data.push({
                key: `${index}`,
                name: `Name ${index}`,
                address: `Address ${index}`
            });
        }
        setDataSource(data);
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text, record) => {
                if (editingRow === record.key) {
                    return (
                        <Form.Item
                            name="name"
                            rules={[{
                                required: true,
                                message: 'Please enter your name',
                            }]}
                        >
                            <Input />
                        </Form.Item>
                    );
                } else {
                    return <p>{text}</p>
                }
            }
        },
        {
            title: 'Address',
            dataIndex: 'address',
            render: (text, record) => {
                if (editingRow === record.key) {
                    return <Form.Item
                        name="address"
                        rules={[{
                            required: true,
                            message: 'Please enter your address'
                        }]}
                    >
                        <Input />
                    </Form.Item>
                } else {
                    return <p>{text}</p>
                }
            }
        },
        {
            title: 'Actions',
            render: (_, record) => {
                return (
                    <>
                        <Button type="link" onClick={() => {
                            setEditingRow(record.key)
                        }}>Edit</Button>
                        <Button type="link">Save</Button>
                    </>
                );
            }
        },
    ];

    return (
        <div>
            <Form>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                >

                </Table>
            </Form>
        </div>
    );
}