import { Menu } from "antd";

export default function MenuTab() {
    return (
        <div>
            <Menu items={[
                { label: "Home", key: "home" },
                { label: "Dashboard", key: "dashboard" },
            ]}></Menu>
        </div>
    );
}