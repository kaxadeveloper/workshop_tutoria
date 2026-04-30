import { Pagination } from "antd";

export default function CustomizePaginationTab() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: "100vh" }}>
            <Pagination total={20} pageSize={5} />
            <Pagination defaultCurrent={2} total={20} pageSize={5} />
        </div>
    );
}