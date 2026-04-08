import { Table, Tag } from "antd";
import { useState } from "react";

export default function TableTab1() {
  const [alreadySelectedRows, setAlreadySelectedRows] = useState(['1', '3']);

  const columns = [
    {
      title: 'Student ID',
      dataIndex: 'id'
    },
    {
      title: 'Student Name',
      dataIndex: 'name'
    },
    {
      title: 'Student Grade',
      dataIndex: 'grade',
      render: (tag) => {
        const color =
          tag.includes('A') ? 'green' :
          tag.includes('B') ? 'blue' : 'red';

        return <Tag color={color}>{tag}</Tag>;
      }
    },
  ];

  const dataSource = [
    { key: '1', id: 1, name: 'Student Name 1', grade: 'A+' },
    { key: '2', id: 2, name: 'Student Name 2', grade: 'A' },
    { key: '3', id: 3, name: 'Student Name 3', grade: 'B' },
    { key: '4', id: 4, name: 'Student Name 4', grade: 'C' },
    { key: '5', id: 5, name: 'Student Name 5', grade: 'A' }
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={{
          type: 'checkbox',

          // ✅ Controlled state
          selectedRowKeys: alreadySelectedRows,

          // ✅ FIX: correct param name
          onChange: (keys) => {
            setAlreadySelectedRows(keys);
          },

          // optional
          onSelect: (record, selected) => {
            console.log(record, selected);
          },

          // optional (can disable rows if needed)
          getCheckboxProps: (record) => ({
            // disabled: record.grade === 'C'
          }),

          // ✅ FIXED selections
          selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_NONE,
            Table.SELECTION_INVERT,

            {
              key: 'even',
              text: 'Select Even Rows',
              onSelect: (changableRowKeys) => {
                const selectedKeys = changableRowKeys.filter(key => {
                  return Number(key) % 2 === 0;
                });
                setAlreadySelectedRows(selectedKeys);
              }
            },

            {
              key: 'excellent',
              text: 'Select Students with Excellent Grades',
              onSelect: (changableRowKeys) => {
                const selectedKeys = changableRowKeys.filter(key => {
                  const student = dataSource.find(
                    s => s.key === key && s.grade.includes('A')
                  );
                  return !!student;
                });
                setAlreadySelectedRows(selectedKeys);
              }
            }
          ]
        }}
      />
    </div>
  );
}