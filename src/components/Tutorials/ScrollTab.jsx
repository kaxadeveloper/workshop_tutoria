import { Table } from "antd";

export default function ScrollTab() {
    const columns = [];
    const dataSource = [];
    const numberOfColumns = 20;
    const numberOfRows = 5;
    for (let index = 0; index < numberOfColumns; index++) {
        columns.push({
            title: `Col ${index + 1}`,
            dataIndex: `col_${index + 1}`,
            fixed:
            index < 2 ? 'left' : index === numberOfColumns - 1 ? "right" : null 
        });
    }
    for (let index = 0; index < numberOfRows; index++) {
        const rowData = {}
        for (let colIndex = 0; colIndex < numberOfColumns; colIndex++) {
            rowData[`col_${colIndex + 1}`] = `R${index + 1}C${colIndex + 1}`
        }
        dataSource.push(rowData);
    }
    return (
        <div>
            <Table
                style={{ maxWidth: 500 }}
                columns={columns}
                dataSource={dataSource}
                scroll={{ x: true }}
            ></Table>
        </div>
    );
}