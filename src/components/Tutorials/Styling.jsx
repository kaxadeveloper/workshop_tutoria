import { Button, DatePicker, Image, Input, Space, Table, Typography } from "antd";
import "./override.scss";

function CustomInput1() {
    return (
        <div className="customInput1">
            <Input placeholder="Type here" />
        </div>
    );
}

function CustomInput2() {
    return (
        <div className="customInput2">
            <Input placeholder="Type here" />
        </div>
    );
}

export default function StylingTab() {
    return (
        <div className="App" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh"
        }}
        >
            <Space size={12} align="center" direction="vertical">
                <Image src="/logo.png" />
                <Typography.Text>
                    CodingMaster
                </Typography.Text>
                <Typography.Text
                    style={{
                        color: "green",
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}
                >
                    Welcome Back!
                </Typography.Text>
                <CustomInput1 />
                <CustomInput2 />
                <Button>Button</Button>
                <DatePicker
                    style={{ width: "100%" }} className="datePicker" dropdownClassName="datePickerDropdown" />

                <Table columns={[
                    {
                        title: "Col1",
                        dataIndex: "col1"
                    },
                    {
                        title: "Col2",
                        dataIndex: "col2"
                    },
                    {
                        title: "Col3",
                        dataIndex: "col3"
                    },
                ]}
                    dataSource={[
                        {
                            col1: "Row1-Col1",
                            col2: "Row1-Col2",
                            col3: "Row1-Col3",
                        },
                        {
                            col1: "Row2-Col1",
                            col2: "Row2-Col2",
                            col3: "Row2-Col3",
                        },
                    ]}
                ></Table>
            </Space>
        </div >
    );
}