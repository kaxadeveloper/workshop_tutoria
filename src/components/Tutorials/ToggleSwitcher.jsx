import {
    CheckOutlined,
    CloseOutlined,
    PoweroffOutlined,
    BgColorsOutlined,
} from "@ant-design/icons";

import {
    Button,
    Card,
    Space,
    Switch,
    Typography,
    message,
} from "antd";

import { useState } from "react";

const { Title, Text } = Typography;

export default function ToggleSwitcherTab() {
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [power, setPower] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLoadingSwitch = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            message.success("Data Loaded Successfully!");
        }, 2000);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                background: darkMode ? "#141414" : "#f5f5f5",
                transition: "0.3s",
                padding: "20px",
            }}
        >
            <Card
                style={{
                    width: 400,
                    borderRadius: 16,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                }}
            >
                <Title level={3} style={{ textAlign: "center" }}>
                    Interactive Switch Panel
                </Title>

                <Space
                    direction="vertical"
                    size="large"
                    style={{ width: "100%" }}
                >
                    {/* Basic Switch */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text>Basic Switch</Text>
                        <Switch />
                    </div>

                    {/* Notifications */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text>
                            Notifications:
                            {" "}
                            {notifications ? "Enabled" : "Disabled"}
                        </Text>

                        <Switch
                            checked={notifications}
                            checkedChildren="ON"
                            unCheckedChildren="OFF"
                            onChange={(checked) => {
                                setNotifications(checked);

                                message.info(
                                    checked
                                        ? "Notifications Enabled"
                                        : "Notifications Disabled"
                                );
                            }}
                        />
                    </div>

                    {/* Dark Mode */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text>
                            <BgColorsOutlined /> Dark Mode
                        </Text>

                        <Switch
                            checked={darkMode}
                            onChange={(checked) => {
                                setDarkMode(checked);
                            }}
                            checkedChildren={<CheckOutlined />}
                            unCheckedChildren={<CloseOutlined />}
                        />
                    </div>

                    {/* Power Switch */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text>
                            Power Status:
                            {" "}
                            <span
                                style={{
                                    color: power ? "green" : "red",
                                    fontWeight: "bold",
                                }}
                            >
                                {power ? "ON" : "OFF"}
                            </span>
                        </Text>

                        <Switch
                            checked={power}
                            checkedChildren={<PoweroffOutlined />}
                            unCheckedChildren={<CloseOutlined />}
                            onChange={(checked) => {
                                setPower(checked);
                            }}
                        />
                    </div>

                    {/* Disabled Example */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text>Disabled Switch</Text>

                        <Switch
                            disabled
                            defaultChecked
                        />
                    </div>

                    {/* Loading Switch */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text>Loading Switch</Text>

                        <Switch
                            checked={loading}
                            loading={loading}
                        />
                    </div>

                    <Button
                        type="primary"
                        block
                        onClick={handleLoadingSwitch}
                    >
                        Simulate Loading
                    </Button>
                </Space>
            </Card>
        </div>
    );
}