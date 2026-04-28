import { Space, Tag } from "antd";

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
            </Space>
        </div>
    );
}