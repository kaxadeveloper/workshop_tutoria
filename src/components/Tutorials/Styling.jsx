import { Input, Typography } from "antd";
import "./override.scss";

export default function StylingTab() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh"
        }}
        >
            <Typography.Text
                style={{
                    color: "red",
                    fontSize: 20,
                    fontWeight: "bold"
                }}
            >
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
            <Input />
        </div>
    );
}