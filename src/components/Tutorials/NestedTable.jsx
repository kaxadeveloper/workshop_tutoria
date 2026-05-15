import { MinusCircleTwoTone, PlusCircleTwoTone } from "@ant-design/icons";
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
            companyName: 'Company Name' + index,
            companyStrength: index * index,
        });
    }
    const nestedColumns = [{
        title: 'Company Name',
        dataIndex: 'companyName'
    },
    {
        title: 'Company Strength',
        dataIndex: 'companyStrength'
    }]
    return (
        <div>
            <Table
                columns={columns}
                dataSource={dataSource}
                expandable={{
                    rowExpandable: (record) => record.age < 6,
                    expandedRowRender: (record) => {
                        if (record.age === 4) {
                            return <Table columns={nestedColumns} dataSource={dataSource}></Table>
                        }
                        return <p>{record.description}</p>;
                    },
                    defaultExpandAllRows: false,
                    defaultExpandedRowKeys: [],
                    expandRowByClick: true,
                    expandIcon: ({ expanded, onExpand, record }) => {
                        if (record.age >= 6) return null
                        return (
                            expanded ? (<MinusCircleTwoTone
                                onClick={(e) => {
                                    onExpand(record, e)
                                }}
                            />
                            ) : (
                                <PlusCircleTwoTone
                                    onClick={(e) => {
                                        onExpand(record, e);
                                    }}
                                />
                            )
                        );
                    }
                }}
            ></Table>
        </div>
    );
}