import { Menu } from "antd";

export default function SideMenuTab() {
    return (
        <div>
            <Menu
                items={[
                    { label: "Home" },
                    { label: "Dashboard" },
                    { label: "Users List" },
                    { label: "Profile" },
                    { label: "Signout" },
                ]}
            ></Menu>
        </div>
    );
}