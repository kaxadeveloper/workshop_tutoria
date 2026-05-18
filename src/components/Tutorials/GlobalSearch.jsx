import { Input, Table } from "antd";
import { useState } from "react";

export default function GlobalSearchTab() {
    const [searchedText, setSearchedText] = useState("");
    return (
        <div>
            <Input.Search placeholder="Search here..."
                style={{
                    marginBottom: 8
                }}
                onSearch={(value) => {
                    setSearchedText(value);
                }}
                onChange={(e) => {
                    setSearchedText(e.target.value);
                }}
            />
            <Table
                columns={[{
                    title: "Name",
                    dataIndex: "name",
                    filteredValue: [searchedText],
                    onFilter: (value, record) => {
                        return String(record.name)
                            .toLowerCase()
                            .includes(value.toLowerCase()) ||
                            String(record.age)
                                .toLowerCase()
                                .includes(value.toLowerCase()) ||
                            String(record.address)
                                .toLowerCase()
                                .includes(value.toLowerCase());
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
                        address: "A Address"
                    },
                    {
                        key: 2,
                        name: "B Name",
                        age: 20,
                        address: "B Address"
                    },
                    {
                        key: 3,
                        name: "C Name",
                        age: 30,
                        address: "C Address"
                    },
                    {
                        key: 4,
                        name: "A Name",
                        age: 10,
                        address: "A Address"
                    },
                    {
                        key: 5,
                        name: "B Name",
                        age: 20,
                        address: "B Address"
                    },
                    {
                        key: 6,
                        name: "C Name",
                        age: 30,
                        address: "C Address"
                    },
                    {
                        key: 7,
                        name: "A Name",
                        age: 10,
                        address: "A Address"
                    },
                    {
                        key: 8,
                        name: "B Name",
                        age: 20,
                        address: "B Address"
                    },
                    {
                        key: 9,
                        name: "C Name",
                        age: 30,
                        address: "C Address"
                    },
                    {
                        key: 10,
                        name: "A Name",
                        age: 10,
                        address: "A Address"
                    },
                    {
                        key: 11,
                        name: "B Name",
                        age: 20,
                        address: "B Address"
                    },
                    {
                        key: 12,
                        name: "C Name",
                        age: 30,
                        address: "C Address"
                    },
                ]}
            ></Table>
        </div>
    );
}