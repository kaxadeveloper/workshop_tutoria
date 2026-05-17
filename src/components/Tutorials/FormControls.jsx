import {
    Button,
    Form,
    Input,
    Card,
    Typography,
    Progress,
    message,
    Space,
    Divider,
} from "antd";

import {
    PlusOutlined,
    MinusOutlined,
    TrophyOutlined,
    UserOutlined,
    MailOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

// Custom Score Component
function PlayerScores({ value = 0, onChange }) {
    const increase = () => {
        onChange(value + 1);
    };

    const decrease = () => {
        onChange(value - 1);
    };

    const getProgressColor = () => {
        if (value < 3) return "#ff4d4f";
        if (value < 7) return "#faad14";
        return "#52c41a";
    };

    return (
        <Card
            size="small"
            style={{
                borderRadius: "16px",
                background: "#f9f9f9",
            }}
        >
            <Space
                direction="vertical"
                style={{ width: "100%", textAlign: "center" }}
            >
                <Title level={3} style={{ margin: 0 }}>
                    {value}
                </Title>

                <Progress
                    percent={Math.min(value * 10, 100)}
                    strokeColor={getProgressColor()}
                    showInfo={false}
                />

                <Space>
                    <Button
                        danger
                        shape="circle"
                        icon={<MinusOutlined />}
                        onClick={decrease}
                    />

                    <Button
                        type="primary"
                        shape="circle"
                        icon={<PlusOutlined />}
                        onClick={increase}
                    />
                </Space>

                <Text type="secondary">
                    {value < 3
                        ? "Beginner"
                        : value < 7
                            ? "Intermediate"
                            : "Pro Player"}
                </Text>
            </Space>
        </Card>
    );
}

// Read Only Admin Email Component
function AdminEmail({ value }) {
    return (
        <Card
            size="small"
            style={{
                borderRadius: "12px",
                background: "#f0f5ff",
            }}
        >
            <Space>
                <MailOutlined />
                <Text strong>{value}</Text>
            </Space>
        </Card>
    );
}

export default function FormControlsTab() {
    const [form] = Form.useForm();

    const handleFinish = (values) => {
        console.log(values);

        message.success(
            `Welcome ${values.playerName}! Your score is ${values.playerScore}`
        );
    };

    const handleFailed = () => {
        message.error("Please fix form validation errors.");
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f5f5f5",
                padding: "20px",
            }}
        >
            <Card
                style={{
                    width: 500,
                    borderRadius: "20px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                }}
            >
                <Space
                    direction="vertical"
                    size="large"
                    style={{ width: "100%" }}
                >
                    <div style={{ textAlign: "center" }}>
                        <TrophyOutlined
                            style={{
                                fontSize: "40px",
                                color: "#faad14",
                            }}
                        />

                        <Title level={2}>Player Dashboard</Title>

                        <Text type="secondary">
                            Manage player information dynamically
                        </Text>
                    </div>

                    <Divider />

                    <Form
                        layout="vertical"
                        form={form}
                        onFinish={handleFinish}
                        onFinishFailed={handleFailed}
                        initialValues={{
                            playerScore: 0,
                            adminEmail: "admin@gmail.com",
                        }}
                    >
                        {/* Player Name */}
                        <Form.Item
                            name="playerName"
                            label="Player Name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter player name.",
                                },
                                {
                                    min: 3,
                                    message:
                                        "Name must be at least 3 characters.",
                                },
                            ]}
                        >
                            <Input
                                size="large"
                                prefix={<UserOutlined />}
                                placeholder="Enter player name"
                                allowClear
                            />
                        </Form.Item>

                        {/* Player Score */}
                        <Form.Item
                            name="playerScore"
                            label="Player Score"
                            rules={[
                                {
                                    validator(_, value) {
                                        if (value >= 0) {
                                            return Promise.resolve();
                                        }

                                        return Promise.reject(
                                            new Error(
                                                "Score must be greater than or equal to 0."
                                            )
                                        );
                                    },
                                },
                            ]}
                        >
                            <PlayerScores />
                        </Form.Item>

                        {/* Admin Email */}
                        <Form.Item
                            name="adminEmail"
                            label="Admin Email"
                            rules={[
                                {
                                    type: "email",
                                    message: "It is not a valid email.",
                                },
                                {
                                    validator(_, value) {
                                        if (
                                            String(value).startsWith("admin")
                                        ) {
                                            return Promise.resolve();
                                        }

                                        return Promise.reject(
                                            new Error(
                                                "Email should start with admin."
                                            )
                                        );
                                    },
                                },
                            ]}
                        >
                            <AdminEmail />
                        </Form.Item>

                        {/* Live Preview */}
                        <Form.Item shouldUpdate>
                            {() => {
                                const values = form.getFieldsValue();

                                return (
                                    <Card
                                        style={{
                                            marginBottom: "20px",
                                            borderRadius: "12px",
                                            background: "#fafafa",
                                        }}
                                    >
                                        <Title level={5}>
                                            Live Preview
                                        </Title>

                                        <p>
                                            <strong>Name:</strong>{" "}
                                            {values.playerName || "N/A"}
                                        </p>

                                        <p>
                                            <strong>Score:</strong>{" "}
                                            {values.playerScore}
                                        </p>

                                        <p>
                                            <strong>Email:</strong>{" "}
                                            {values.adminEmail}
                                        </p>
                                    </Card>
                                );
                            }}
                        </Form.Item>

                        {/* Buttons */}
                        <Space style={{ width: "100%" }}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                block
                            >
                                Submit
                            </Button>

                            <Button
                                size="large"
                                block
                                onClick={() => form.resetFields()}
                            >
                                Reset
                            </Button>
                        </Space>
                    </Form>
                </Space>
            </Card>
        </div>
    );
}