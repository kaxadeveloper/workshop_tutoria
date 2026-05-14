import { DashboardOutlined, HomeOutlined, PoweroffOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Layout } from 'antd';
const { Header: AntHeader } = Layout;
import { Routes, Route, useNavigate } from 'react-router-dom';

export default function SideMenuTab() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                height: "100vh"
            }}
        >
            <Header />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1
                }}
            >
                <SideMenu />
                <Content />
            </div>
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <div
            style={{
                height: 60,
                backgroundColor: "lightskyblue",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
            }}
        >
            Header
        </div>
    );
}

function Footer() {
    return (
        <div
            style={{
                height: 60,
                backgroundColor: "lightgray",
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
            }}
        >
            Footer
        </div>
    );
}

function SideMenu() {
    const navigate = useNavigate();

    return (
        <Menu
            onClick={({ key }) => {
                if (key === "signout") {

                } else {
                    navigate(key);
                }
            }}
            defaultSelectedKeys={[window.location.pathname]}
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
                    icon: <UnorderedListOutlined />,
                    children: [
                        {
                            label: "Active Users",
                            key: "/activeUsers"
                        },
                        {
                            label: "Disabled users",
                            key: "/disabledUsers"
                        }
                    ],
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
    );
}

function Content() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<div>Home</div>}></Route>
                <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
                <Route path="/activeUsers" element={<div>Active Users List</div>}></Route>
                <Route path="/disabledUsers" element={<div>Disabled Users List</div>}></Route>
                <Route path="/profile" element={<div>Profile</div>}></Route>
            </Routes>
        </div>
    );
}