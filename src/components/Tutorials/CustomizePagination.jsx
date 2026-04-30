import { Pagination, Space } from "antd";

export default function CustomizePaginationTab() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: "100vh" }}>
            <Space size={8} direction="vertical">
                <Pagination total={20} pageSize={5} />
                <Pagination defaultCurrent={2} total={20} pageSize={5} />
                <Pagination defaultCurrent={2} total={200} pageSize={5} />
                <Pagination total={20} showSizeChanger />
            </Space>
        </div>
    );
}