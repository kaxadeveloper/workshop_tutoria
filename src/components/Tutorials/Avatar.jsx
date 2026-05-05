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
            <Space>
                <Avatar />
                <Avatar shape="square" />
            </Space>
        </div>
    );
}