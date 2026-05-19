import {
    Table,
    Input,
    Button,
    Space,
    Switch,
    Slider,
    Typography,
    Card,
} from "antd";
import {
    ReloadOutlined,
    PlusOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import { useMemo, useState } from "react";

const { Title, Text } = Typography;

export default function ScrollTab() {
    const [numberOfColumns, setNumberOfColumns] = useState(10);
    const [numberOfRows, setNumberOfRows] = useState(15);
    const [searchedText, setSearchedText] = useState("");
    const [fixedColumns, setFixedColumns] = useState(true);
    const [stripedRows, setStripedRows] = useState(true);

    // Generate columns dynamically
    const columns = useMemo(() => {
        return Array.from({ length: numberOfColumns }, (_, index) => ({
            title: `Column ${index + 1}`,
            dataIndex: `col_${index + 1}`,
            key: `col_${index + 1}`,
            width: 140,

            fixed: fixedColumns
                ? index < 2
                    ? "left"
                    : index === numberOfColumns - 1
                        ? "right"
                        : null
                : null,

            sorter: (a, b) =>
                a[`col_${index + 1}`]
                    .localeCompare(b[`col_${index + 1}`]),

            filterSearch: true,

            onCell: () => ({
                style: {
                    whiteSpace: "nowrap",
                },
            }),
        }));
    }, [numberOfColumns, fixedColumns]);

    // Generate table data dynamically
    const dataSource = useMemo(() => {
        return Array.from({ length: numberOfRows }, (_, rowIndex) => {
            const rowData = {
                key: rowIndex,
            };

            for (
                let colIndex = 0;
                colIndex < numberOfColumns;
                colIndex++
            ) {
                rowData[`col_${colIndex + 1}`] =
                    `R${rowIndex + 1}C${colIndex + 1}`;
            }

            return rowData;
        });
    }, [numberOfRows, numberOfColumns]);

    // Search functionality
    const filteredData = dataSource.filter((row) =>
        Object.values(row).some((value) =>
            String(value)
                .toLowerCase()
                .includes(searchedText.toLowerCase())
        )
    );

    // Add row dynamically
    const addRow = () => {
        setNumberOfRows((prev) => prev + 1);
    };

    // Remove row dynamically
    const removeRow = () => {
        if (numberOfRows > 1) {
            setNumberOfRows((prev) => prev - 1);
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                padding: 20,
                background: "#f5f5f5",
            }}
        >
            <Card
                style={{
                    maxWidth: 1400,
                    margin: "0 auto",
                    borderRadius: 12,
                }}
            >
                <Space
                    direction="vertical"
                    size="large"
                    style={{ width: "100%" }}
                >
                    {/* Header */}
                    <div>
                        <Title level={2}>
                            Dynamic Scrollable Table
                        </Title>

                        <Text type="secondary">
                            Interactive Ant Design table with
                            dynamic rows, columns, search,
                            sorting, scrolling, and fixed columns.
                        </Text>
                    </div>

                    {/* Controls */}
                    <Card size="small">
                        <Space
                            wrap
                            size="large"
                            style={{ width: "100%" }}
                        >
                            {/* Search */}
                            <Input.Search
                                placeholder="Search table..."
                                allowClear
                                style={{ width: 250 }}
                                onChange={(e) =>
                                    setSearchedText(
                                        e.target.value
                                    )
                                }
                            />

                            {/* Column Slider */}
                            <div style={{ width: 220 }}>
                                <Text strong>
                                    Columns: {numberOfColumns}
                                </Text>

                                <Slider
                                    min={5}
                                    max={30}
                                    value={numberOfColumns}
                                    onChange={(value) =>
                                        setNumberOfColumns(value)
                                    }
                                />
                            </div>

                            {/* Row Slider */}
                            <div style={{ width: 220 }}>
                                <Text strong>
                                    Rows: {numberOfRows}
                                </Text>

                                <Slider
                                    min={5}
                                    max={100}
                                    value={numberOfRows}
                                    onChange={(value) =>
                                        setNumberOfRows(value)
                                    }
                                />
                            </div>

                            {/* Switches */}
                            <Space direction="vertical">
                                <div>
                                    <Text>
                                        Fixed Columns
                                    </Text>{" "}
                                    <Switch
                                        checked={fixedColumns}
                                        onChange={(checked) =>
                                            setFixedColumns(
                                                checked
                                            )
                                        }
                                    />
                                </div>

                                <div>
                                    <Text>
                                        Striped Rows
                                    </Text>{" "}
                                    <Switch
                                        checked={stripedRows}
                                        onChange={(checked) =>
                                            setStripedRows(
                                                checked
                                            )
                                        }
                                    />
                                </div>
                            </Space>

                            {/* Action Buttons */}
                            <Space>
                                <Button
                                    type="primary"
                                    icon={<PlusOutlined />}
                                    onClick={addRow}
                                >
                                    Add Row
                                </Button>

                                <Button
                                    danger
                                    icon={<DeleteOutlined />}
                                    onClick={removeRow}
                                >
                                    Remove Row
                                </Button>

                                <Button
                                    icon={<ReloadOutlined />}
                                    onClick={() => {
                                        setNumberOfColumns(10);
                                        setNumberOfRows(15);
                                        setSearchedText("");
                                    }}
                                >
                                    Reset
                                </Button>
                            </Space>
                        </Space>
                    </Card>

                    {/* Table */}
                    <Table
                        bordered
                        size="middle"
                        columns={columns}
                        dataSource={filteredData}
                        pagination={{
                            pageSize: 8,
                            showSizeChanger: true,
                        }}
                        scroll={{
                            x: numberOfColumns * 140,
                            y: 400,
                            scrollToFirstRowOnChange: true,
                        }}
                        rowClassName={(_, index) =>
                            stripedRows && index % 2 === 0
                                ? "striped-row"
                                : ""
                        }
                    />
                </Space>
            </Card>

            {/* Custom Row Styling */}
            <style>
                {`
                    .striped-row td {
                        background-color: #fafafa !important;
                    }

                    .ant-table-cell {
                        transition: all 0.3s ease;
                    }

                    .ant-table-cell:hover {
                        background-color: #e6f4ff !important;
                    }
                `}
            </style>
        </div>
    );
}