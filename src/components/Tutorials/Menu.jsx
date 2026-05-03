import {
    DashboardOutlined,
    DollarCircleOutlined,
    EditOutlined,
    HomeFilled,
    MoneyCollectOutlined,
    SwitcherOutlined
} from "@ant-design/icons";
import { Input, Menu, Space, message } from "antd";
import { useState } from "react";

export default function MenuTab() {
    const [selectedKey, setSelectedKey] = useState("home");

    // Handle menu click
    const handleMenuClick = (e) => {
        setSelectedKey(e.key);

        // Example actions
        switch (e.key) {
            case "home":
                message.success("Home clicked");
                break;
            case "rev":
                message.info("Viewing Revenue");
                break;
            case "exp":
                message.warning("Viewing Expenses");
                break;
            case "ep":
                message.info("Edit Profile");
                break;
            case "sa":
                message.info("Switch Account");
                break;
            case "signout":
                message.error("Signing out...");
                break;
            default:
                break;
        }
    };

    // Handle search
    const handleSearch = (value) => {
        message.info(`Searching for: ${value}`);
        console.log("Search:", value);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh"
            }}
        >
            <Space>
                <Menu
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    defaultOpenKeys={["dashboard"]}
                    onClick={handleMenuClick}
                    style={{ width: 250 }}
                    items={[
                        {
                            label: (
                                <Input.Search
                                    placeholder="Search here..."
                                    onSearch={handleSearch}
                                />
                            ),
                            key: "search",
                        },
                        {
                            label: "Home",
                            key: "home",
                            icon: <HomeFilled />,
                        },
                        {
                            label: "Dashboard",
                            key: "dashboard",
                            icon: <DashboardOutlined />,
                            children: [
                                {
                                    label: "Revenue",
                                    key: "rev",
                                    icon: <DollarCircleOutlined />,
                                },
                                {
                                    label: (
                                        <span style={{ color: "#f00" }}>
                                            Expenses
                                        </span>
                                    ),
                                    key: "exp",
                                    icon: <MoneyCollectOutlined />,
                                },
                            ],
                        },
                        {
                            label: "User Management",
                            key: "um",
                            type: "group",
                            children: [
                                {
                                    label: "Edit Profile",
                                    key: "ep",
                                    icon: <EditOutlined />,
                                },
                                {
                                    label: "Switch Account",
                                    key: "sa",
                                    icon: <SwitcherOutlined />,
                                },
                            ],
                        },
                        {
                            label: "Signout",
                            key: "signout",
                            danger: true,
                        },
                    ]}
                />
            </Space>
        </div>
    );
}