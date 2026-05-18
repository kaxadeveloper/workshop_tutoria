import { Input, Table } from "antd";

export default function GlobalSearchTab() {
    return (
        <div>
            <Input.Search placeholder="Search here..."
                style={{
                    marginBottom: 8
                }}
            />
            <Table
                columns={[{
                    title: "Name",
                    dataIndex: "name",
                    filteredValue: ["A"],
                    onFilter: (value, record) => {
                        return record.name.includes(value);
                    }
                },
                {
                    title: "Age",
                    dataIndex: "age"
                },
                {
                    title: "Address",
                    dataIndex: "address"
                },
                ]}
                dataSource={[
                    {
                        key: 1,
                        name: "A Name",
                        age: 10,
                        address: "A Name"
                    },
                    {
                        key: 1,
                        name: "B Name",
                        age: 20,
                        address: "B Name"
                    },
                    {
                        key: 1,
                        name: "C Name",
                        age: 30,
                        address: "C Name"
                    },
                ]}
            >

            </Table>
        </div>
    );
}