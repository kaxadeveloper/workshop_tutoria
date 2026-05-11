import {
    CheckOutlined,
    CloseOutlined,
    PoweroffOutlined,
} from "@ant-design/icons";

import {
    Button,
    Card,
    Divider,
    Space,
    Switch,
    Typography,
    message,
} from "antd";

import { useState } from "react";

const { Title, Text } = Typography;

export default function ToggleSwitchTab() {
    const [basicSwitch, setBasicSwitch] = useState(false);
    const [notificationEnabled, setNotificationEnabled] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [loadingSwitch, setLoadingSwitch] = useState(false);
    const [disabledSwitch, setDisabledSwitch] = useState(false);

    const handleLoadingToggle = () => {
        setLoadingSwitch(true);

        setTimeout(() => {
            setLoadingSwitch(false);

            message.success(
                `Switch turned ${!basicSwitch ? "ON" : "OFF"}`
            );

            setBasicSwitch(!basicSwitch);
        }, 1500);
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
                    width: 450,
                    borderRadius: "16px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                }}
            >
                <Title level={3} style={{ textAlign: "center" }}>
                    Dynamic Toggle Switches
                </Title>

                <Divider />

                <Space
                    direction="vertical"
                    size={25}
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

                        <Switch
                            checked={basicSwitch}
                            onChange={(checked) => {
                                setBasicSwitch(checked);

                                message.info(
                                    `Basic Switch: ${
                                        checked ? "ON" : "OFF"
                                    }`
                                );
                            }}
                        />
                    </div>

                    {/* Notification Switch */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text>Notifications</Text>

                        <Switch
                            checked={notificationEnabled}
                            checkedChildren="ON"
                            unCheckedChildren="OFF"
                            onChange={(checked) => {
                                setNotificationEnabled(checked);
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
                        <Text>Dark Mode</Text>

                        <Switch
                            checked={darkMode}
                            checkedChildren={<CheckOutlined />}
                            unCheckedChildren={<CloseOutlined />}
                            onChange={(checked) => {
                                setDarkMode(checked);
                            }}
                        />
                    </div>

                    {/* Disabled Switch */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text>Disabled Switch</Text>

                        <Switch
                            checked={disabledSwitch}
                            disabled
                        />
                    </div>

                    {/* Async Loading Switch */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text>Async Loading Switch</Text>

                        <Switch
                            checked={basicSwitch}
                            loading={loadingSwitch}
                            onChange={handleLoadingToggle}
                        />
                    </div>

                    <Divider />

                    {/* Control Buttons */}
                    <Space
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Button
                            type="primary"
                            icon={<PoweroffOutlined />}
                            onClick={() => {
                                setBasicSwitch(false);
                                setNotificationEnabled(false);
                                setDarkMode(false);

                                message.warning("All switches reset");
                            }}
                        >
                            Reset All
                        </Button>

                        <Button
                            onClick={() => {
                                setDisabledSwitch(!disabledSwitch);
                            }}
                        >
                            Toggle Disabled State
                        </Button>
                    </Space>

                    {/* Live Status */}
                    <Card size="small">
                        <Space direction="vertical">
                            <Text>
                                Basic Switch:{" "}
                                <strong>
                                    {basicSwitch ? "ON" : "OFF"}
                                </strong>
                            </Text>

                            <Text>
                                Notifications:{" "}
                                <strong>
                                    {notificationEnabled
                                        ? "Enabled"
                                        : "Disabled"}
                                </strong>
                            </Text>

                            <Text>
                                Dark Mode:{" "}
                                <strong>
                                    {darkMode ? "Active" : "Inactive"}
                                </strong>
                            </Text>
                        </Space>
                    </Card>
                </Space>
            </Card>
        </div>
    );
}