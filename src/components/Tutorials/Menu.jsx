import { Menu } from "antd";

export default function MenuTab() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh"
        }}>
            <Menu items={[
                { label: "Home", key: "home" },
                { label: "Dashboard", key: "dashboard" },
                { label: "User Management", key: "um" },
            ]}></Menu>
        </div>
    );
}