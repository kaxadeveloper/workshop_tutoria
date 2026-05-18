import { Table } from "antd";

export default function GlobalSearchTab() {
    return (
        <div>
            <Table
                columns={[{
                    title: "Name",
                    dataIndex: "name"
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
                
            >

            </Table>
        </div>
    );
}