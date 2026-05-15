import { Table } from "antd";

export default function NestedTableTab() {
    const columns = [{
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    }];
    const dataSource = [];
    for (let index = 1; index < 7; index++) {
        dataSource.push({
            key: index,
            name: "Name " + index,
            age: index,
            address: "Address " + index,
            description: "Description " + index,
        });
    }
    return (
        <div>
            <Table
                columns={columns}
                dataSource={dataSource}
                expandable={{
                    rowExpandable: (record) => true,
                    expandedRowRender: (record) => {
                        return <p>{record.description}</p>;
                    },
                }}
            ></Table>
        </div>
    );
}