import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

export default function AvatarTab() {

    // 🔹 Define all avatar types in one place
    const avatars = [
        {
            key: "name",
            content: "CodingMaster",
            style: { backgroundColor: "green", color: "white" }
        },
        {
            key: "letter",
            content: "C",
            shape: "square",
            style: { backgroundColor: "black", color: "white" }
        },
        {
            key: "logo",
            src: "/logo.png"
        },
        {
            key: "icon",
            icon: <UserOutlined />
        }
    ];

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh"
        }}>
            <Space size={20} direction="vertical">

                {/* 🔹 Single Avatars */}
                <Space>
                    {avatars.map((item) => (
                        <Avatar
                            key={item.key}
                            src={item.src}
                            icon={item.icon}
                            shape={item.shape || "circle"}
                            style={item.style}
                        >
                            {item.content}
                        </Avatar>
                    ))}
                </Space>

                {/* 🔹 Avatar Group */}
                <Avatar.Group>
                    {avatars.map((item) => (
                        <Avatar
                            key={item.key}
                            src={item.src}
                            icon={item.icon}
                            shape={item.shape || "circle"}
                            style={item.style}
                        >
                            {item.content}
                        </Avatar>
                    ))}
                </Avatar.Group>

                {/* 🔹 Avatar Group with maxCount */}
                <Avatar.Group maxCount={2}>
                    {avatars.map((item) => (
                        <Avatar
                            key={item.key}
                            src={item.src}
                            icon={item.icon}
                            shape={item.shape || "circle"}
                            style={item.style}
                        >
                            {item.content}
                        </Avatar>
                    ))}
                </Avatar.Group>

            </Space>
        </div>
    );
}