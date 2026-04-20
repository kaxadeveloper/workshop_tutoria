import { Table } from "antd";
import { useState } from "react";

export default function TableCrudTab () {
    const [dataSource, setDataSource] = useState([
        {
            id:1,
            name:'John',
            email:'john@gmail.com',
            address:'John Address'
        },
        {
            id:2,
            name:'David',
            email:'david@gmail.com',
            address:'David Address'
        },
        {
            id:3,
            name:'James',
            email:'james@gmail.com',
            address:'James Address'
        },
        {
            id:4,
            name:'Sam',
            email:'sam@gmail.com',
            address:'Sam Address'
        }
    ])
    const columns = [
        {
            key:'1',
            title:'ID',
            dataIndex:'id'
        },
        {
            key:'2',
            title:'Name',
            dataIndex:'name'
        },
        {
            key:'3',
            title:'Email',
            dataIndex:'email'
        },
        {
            key:'4',
            title:'Address',
            dataIndex:'address'
        }
    ]

    return (
        <div>
            <Table
            columns={columns}
            dataSource={dataSource}
            ></Table> 
        </div>
    )
}