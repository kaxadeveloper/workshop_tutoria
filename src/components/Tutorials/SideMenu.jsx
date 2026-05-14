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
                items={[
                    { label: "Home",
                        
                     },
                    { label: "Dashboard" },
                    { label: "Users List" },
                    { label: "Profile" },
                    { label: "Signout" },
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