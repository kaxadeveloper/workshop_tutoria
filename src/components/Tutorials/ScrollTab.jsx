import { Table } from "antd";

export default function ScrollTab() {
    const columns = [];
    const dataSource = [];
    const numberOfColumns = 5;
    const numberOfRows = 5;
    for (let index = 0; index < numberOfColumns; index++) {
        columns.push({
            title: `Col ${index + 1}`,
            dataIndex: `col_${index + 1}`
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
                columns={columns}
                dataSource={dataSource}
            ></Table>
        </div>
    );
}