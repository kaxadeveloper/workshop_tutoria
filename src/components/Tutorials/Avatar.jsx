import { Avatar, Space } from "antd";

export default function AvatarTab() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh"
        }}
        >
            <Space size={12} direction="vertical">
                <Avatar style={{ backgroundColor: "green", color: "white" }}>CodingMaster</Avatar>
                <Avatar shape="square" />
            </Space>
        </div>
    );
}