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
                        { label: "Home", key: "home" },
                        {
                            label: "Dashboard",
                            key: "dashboard",
                            children: [
                                { label: "Revenue", key: "rev" },
                                { label: "Expenses", key: "exp" },
                            ],
                        },
                        {
                            label: "User Management", 
                            key: "um",
                            children: [
                                { label: "Edit Profile", key: "ep" },
                                { label: "Switch Account", key: "sa" },
                            ],
                        },
                        { label: "Signout", key: "signout" },
                    ]}
                ></Menu>
            </Space>
        </div>
    );
}