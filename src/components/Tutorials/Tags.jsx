import { Button, Space, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default function TagsTab() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
        }}>
            <Space direction="vertical" size={2}>
                <Tag>Tag</Tag>
                <Tag>Tag2</Tag>
                <Tag
                    closable
                    onClose={() => {

                    }}
                >
                    Tag3
                </Tag>
                <Tag
                    closable
                    color="warning"
                    onClose={() => {

                    }}
                >
                    Warning
                </Tag>
                <Tag
                    closable
                    color="error"
                    onClose={() => {

                    }}
                    closeIcon={
                        <Button danger type="text">
                            X
                        </Button>
                    }
                >
                    Error
                </Tag>
                <Tag
                    closable
                    color="error"
                    onClose={() => {

                    }}
                    closeIcon={
                        <DeleteOutlined />
                    }
                >
                    Custom Remove Icon
                </Tag>
                <Tag
                    closable
                    color="#f0f"
                    onClose={() => {

                    }}
                    closeIcon={
                        <DeleteOutlined />
                    }
                >
                    Custom Color Tag
                </Tag>
                <Tag
                    closable
                    style={{
                        backgroundColor: "red", color: "yellow", borderColor: "blue",
                        borderRadius: 10,
                    }}
                    onClose={() => {

                    }}
                    closeIcon={
                        <DeleteOutlined style={{
                            color: "white",
                            fontSize: 15
                        }} />
                    }
                >
                    Custom Tag
                </Tag>
                <Tag
                    closable
                    style={{
                        backgroundColor: "red", color: "yellow", borderColor: "blue",
                        borderRadius: 10,
                    }}
                    onClose={() => {

                    }}
                    closeIcon={
                        <DeleteOutlined style={{
                            color: "white",
                            fontSize: 15
                        }} />
                    }
                >
                    <Button>Button Tag</Button>
                </Tag>
            </Space>
        </div>
    );
}