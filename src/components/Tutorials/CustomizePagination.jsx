import { Pagination, Space } from "antd";
import { useState } from "react";

export default function CustomizePaginationTab() {
    const [currentPage, setCurrentPage] = useState(2);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: "100vh" }}>
            <Space size={8} direction="vertical">
                <Pagination total={20} pageSize={5} />
                <Pagination defaultCurrent={2} total={20} pageSize={5} />
                <Pagination defaultCurrent={2} total={200} pageSize={5} />
                <Pagination total={20} showSizeChanger />
                <Pagination
                    total={20}
                    showSizeChanger
                    pageSizeOptions={[1, 2, 10, 30]}
                />
                <Pagination total={20} pageSize={5} showQuickJumper />
                <Pagination simple total={20} pageSize={5} />
                <Pagination
                    total={20}
                    pageSize={5}
                    showQuickJumper
                    itemRender={(page, type) => {
                        if (type === 'next') {
                            return <a>NEXT</a>
                        }
                        else if (type === 'prev') {
                            return <a>PRE</a>
                        }
                        if (type === 'page') {
                            return <a>Page#{page}</a>;
                        }
                    }}
                    current={currentPage}
                    onChange={(page, pageSize) => {
                        setCurrentPage(page);
                    }}
                />
                <div style={{ color: "red" }}>Showing content of page #{currentPage}</div>
            </Space>
        </div>
    );
}