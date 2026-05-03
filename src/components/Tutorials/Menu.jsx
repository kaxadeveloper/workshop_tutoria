import { DashboardOutlined, DollarCircleOutlined, EditOutlined, HomeFilled, MoneyCollectOutlined, SwitcherOutlined } from "@ant-design/icons";
import { Menu, Space } from "antd";

export default function MenuTab() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh"
        }}>
            <Space>
                <Menu
                    mode="inline"
                    defaultOpenKeys={["dashboard"]}
                    items={[
                        { label: "Home", key: "home", icon: <HomeFilled></HomeFilled> },
                        {
                            label: "Dashboard",
                            key: "dashboard",
                            icon: <DashboardOutlined />,
                            children: [
                                { label: "Revenue", key: "rev", icon: <DollarCircleOutlined /> },
                                {
                                    label: "Expenses", key: "exp",
                                    icon: <MoneyCollectOutlined />,
                                },
                            ],
                        },
                        {
                            label: "User Management",
                            key: "um",
                            type: "group",
                            children: [
                                { label: "Edit Profile", key: "ep", icon: <EditOutlined /> },
                                { label: "Switch Account", key: "sa", icon: <SwitcherOutlined />, },
                            ],
                        },
                        { label: "Signout", key: "signout", danger: true },
                    ]}
                ></Menu>
            </Space>
        </div>
    );
}