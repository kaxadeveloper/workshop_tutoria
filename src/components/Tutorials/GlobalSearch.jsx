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
                            .includes(value.toLocaleLowerCase());
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