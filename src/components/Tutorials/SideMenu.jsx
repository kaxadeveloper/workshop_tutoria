import { DashboardOutlined, HomeOutlined, PoweroffOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Layout } from 'antd';
const { Header: AntHeader } = Layout;
import { Routes, Route, useNavigate } from 'react-router-dom';

export default function SideMenuTab() {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <div>
                <SideMenu />
                <Content />
            </div>
            <Footer />
        </div>
    );
}

function Header() {
    return <div>Header</div>
}

function Footer() {
    return <div>Footer</div>
}

function SideMenu() {
    return (<div
        style={{
            display: "flex",
            flexDirection: "row",
        }}
    >
        <Menu
            onClick={({ key }) => {
                if (key === "signout") {

                } else {
                    navigate(key);
                }
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
    </div>)
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