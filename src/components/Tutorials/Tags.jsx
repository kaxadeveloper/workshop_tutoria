import { Button, Space, Tag } from "antd";

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
            </Space>
        </div>
    );
}