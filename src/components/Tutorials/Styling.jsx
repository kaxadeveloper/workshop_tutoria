import { Button, Image, Input, Space, Typography } from "antd";
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
                <Image src="/logo.png"/>
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
            </Space>
        </div>
    );
}