import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    LoadingOutlined,
    SmileOutlined,
    SolutionOutlined,
    UserOutlined,
} from "@ant-design/icons";

import {
    Button,
    Card,
    Divider,
    Progress,
    Space,
    Steps,
    Switch,
    Tag,
    Typography,
} from "antd";

import { useState } from "react";

const { Title, Text } = Typography;

export default function StepsTab() {
    const [current, setCurrent] = useState(0);
    const [vertical, setVertical] = useState(false);
    const [dots, setDots] = useState(false);
    const [error, setError] = useState(false);

    const steps = [
        {
            title: "Login",
            description: "User authentication",
            icon: <UserOutlined />,
        },
        {
            title: "Verification",
            description: "Verify account details",
            icon: <SolutionOutlined />,
            subTitle: "2 Minutes",
        },
        {
            title: "Processing",
            description: "Processing your request",
            icon: <LoadingOutlined />,
        },
        {
            title: "Completed",
            description: "Everything is done",
            icon: <SmileOutlined />,
        },
    ];

    const next = () => {
        if (current < steps.length - 1) {
            setCurrent(current + 1);
        }
    };

    const prev = () => {
        if (current > 0) {
            setCurrent(current - 1);
        }
    };

    const reset = () => {
        setCurrent(0);
        setError(false);
    };

    const percent = Math.round(
        ((current + 1) / steps.length) * 100
    );

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                padding: "20px",
                background: "#f5f5f5",
            }}
        >
            <Card
                style={{
                    width: "100%",
                    maxWidth: "900px",
                    borderRadius: "20px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
            >
                <Space
                    direction="vertical"
                    size="large"
                    style={{ width: "100%" }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "10px",
                        }}
                    >
                        <Title level={3}>
                            Interactive Steps Component
                        </Title>

                        <Tag color="blue">
                            Step {current + 1} / {steps.length}
                        </Tag>
                    </div>

                    <Text type="secondary">
                        Fully interactive Ant Design Steps example.
                    </Text>

                    <Divider />

                    <Space wrap>
                        <Switch
                            checked={vertical}
                            onChange={setVertical}
                        />
                        <Text>Vertical Mode</Text>

                        <Switch
                            checked={dots}
                            onChange={setDots}
                        />
                        <Text>Progress Dots</Text>

                        <Switch
                            checked={error}
                            onChange={setError}
                        />
                        <Text>Error Status</Text>
                    </Space>

                    <Progress percent={percent} />

                    <Steps
                        current={current}
                        onChange={(c) => setCurrent(c)}
                        direction={vertical ? "vertical" : "horizontal"}
                        progressDot={dots}
                        status={error ? "error" : "process"}
                        items={steps}
                    />

                    <Card
                        style={{
                            borderRadius: "16px",
                            background: "#fafafa",
                        }}
                    >
                        <Space direction="vertical">
                            <Title level={4}>
                                {steps[current].title}
                            </Title>

                            <Text>
                                {steps[current].description}
                            </Text>

                            <Tag
                                color={
                                    current === steps.length - 1
                                        ? "green"
                                        : "processing"
                                }
                            >
                                {current === steps.length - 1
                                    ? "Completed"
                                    : "In Progress"}
                            </Tag>
                        </Space>
                    </Card>

                    <Space wrap>
                        <Button
                            onClick={prev}
                            disabled={current === 0}
                        >
                            Previous
                        </Button>

                        <Button
                            type="primary"
                            onClick={next}
                            disabled={
                                current === steps.length - 1
                            }
                        >
                            Next
                        </Button>

                        <Button danger onClick={reset}>
                            Reset
                        </Button>
                    </Space>

                    <Divider />

                    <Space wrap>
                        <Tag icon={<CheckCircleOutlined />} color="success">
                            Interactive
                        </Tag>

                        <Tag icon={<ClockCircleOutlined />} color="warning">
                            Dynamic
                        </Tag>

                        <Tag color="purple">
                            Responsive Layout
                        </Tag>
                    </Space>
                </Space>
            </Card>
        </div>
    );
}