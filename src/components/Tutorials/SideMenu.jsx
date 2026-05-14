import { DashboardOutlined, HomeOutlined, PoweroffOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Routes, Route } from 'react-router-dom';

export default function SideMenuTab() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
            }}
        >
            <Menu
                onClick={({ key }) => {

                }}
                items={[
                    {
                        label: "Home",
                        key: "/",
                        icon: <HomeOutlined />
                    },
                    {
                        label: "Dashboard",
                        key: "/dashboard",
                        icon: <DashboardOutlined />
                    },
                    {
                        label: "Users List",
                        key: "/usersList",
                        icon: <UnorderedListOutlined />
                    },
                    {
                        label: "Profile",
                        key: "/profile",
                        icon: <UserOutlined />
                    },
                    {
                        label: "Signout",
                        key: "signout",
                        icon: <PoweroffOutlined />,
                        danger: true
                    },
                ]}
            ></Menu>
            <Content />
        </div>
    );
}

function Content() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<div>Home</div>}></Route>
                <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
                <Route path="/usersList" element={<div>Users List</div>}></Route>
                <Route path="/profile" element={<div>Profile</div>}></Route>
            </Routes>
        </div>
    );
}