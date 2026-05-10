import {
    CaretRightFilled,
    CodeOutlined,
    QuestionCircleOutlined,
    ThunderboltOutlined,
    AppstoreOutlined,
} from "@ant-design/icons";

import {
    Button,
    Collapse,
    Typography,
    Tag,
    Space,
    message,
} from "antd";

const { Title, Paragraph, Text } = Typography;

export default function AccordionTab() {

    const handleClick = (topic) => {
        message.success(`${topic} clicked!`);
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                background: "#f5f5f5",
                padding: "20px",
            }}
        >
            <div
                style={{
                    width: "700px",
                    background: "white",
                    padding: "25px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
            >
                <Title
                    level={2}
                    style={{
                        textAlign: "center",
                        marginBottom: "30px",
                    }}
                >
                    React Frequently Asked Questions
                </Title>

                <Collapse
                    accordion
                    defaultActiveKey={["1"]}
                    ghost
                    expandIcon={({ isActive }) => (
                        <CaretRightFilled rotate={isActive ? 90 : 0} />
                    )}
                    expandIconPosition="start"
                >

                    {/* Question 1 */}
                    <Collapse.Panel
                        key="1"
                        header={
                            <Space>
                                <QuestionCircleOutlined />
                                <Text strong>What is React?</Text>
                            </Space>
                        }
                    >
                        <Paragraph>
                            React is a JavaScript library used for building user
                            interfaces, especially single-page applications.
                            It allows developers to create reusable UI components
                            and update the page efficiently using a virtual DOM.
                        </Paragraph>

                        <Space>
                            <Tag color="blue">JavaScript</Tag>
                            <Tag color="green">UI Library</Tag>
                            <Tag color="purple">Virtual DOM</Tag>
                        </Space>

                        <br />
                        <br />

                        <Button
                            type="primary"
                            onClick={() => handleClick("React")}
                        >
                            Learn More
                        </Button>
                    </Collapse.Panel>

                    {/* Question 2 */}
                    <Collapse.Panel
                        key="2"
                        header={
                            <Space>
                                <CodeOutlined />
                                <Text strong>What is JSX in React?</Text>
                            </Space>
                        }
                    >
                        <Paragraph>
                            JSX stands for JavaScript XML. It allows developers
                            to write HTML-like code inside JavaScript files.
                            JSX makes React components easier to read and write.
                        </Paragraph>

                        <div
                            style={{
                                background: "#f4f4f4",
                                padding: "15px",
                                borderRadius: "8px",
                                marginTop: "10px",
                            }}
                        >
                            <code>
                                const element = &lt;h1&gt;Hello React&lt;/h1&gt;
                            </code>
                        </div>

                        <br />

                        <Button
                            type="dashed"
                            onClick={() => handleClick("JSX")}
                        >
                            Show JSX Info
                        </Button>
                    </Collapse.Panel>

                    {/* Question 3 */}
                    <Collapse.Panel
                        key="3"
                        header={
                            <Space>
                                <AppstoreOutlined />
                                <Text strong>
                                    What is the difference between props and
                                    state in React?
                                </Text>
                            </Space>
                        }
                        extra={<Tag color="orange">Important</Tag>}
                    >
                        <Paragraph>
                            <Text strong>Props:</Text> Props are used to pass
                            data from a parent component to a child component.
                            They are read-only.
                        </Paragraph>

                        <Paragraph>
                            <Text strong>State:</Text> State is used to store
                            and manage data inside a component, and it can
                            change over time.
                        </Paragraph>

                        <Space direction="vertical">
                            <Tag color="cyan">Props → Read Only</Tag>
                            <Tag color="magenta">State → Changeable</Tag>
                        </Space>
                    </Collapse.Panel>

                    {/* Question 4 */}
                    <Collapse.Panel
                        key="4"
                        header={
                            <Space>
                                <ThunderboltOutlined />
                                <Text strong>
                                    What is the purpose of useState in React?
                                </Text>
                            </Space>
                        }
                    >
                        <Paragraph>
                            useState is a React Hook that allows functional
                            components to store and update state.
                        </Paragraph>

                        <div
                            style={{
                                background: "#f4f4f4",
                                padding: "15px",
                                borderRadius: "8px",
                            }}
                        >
                            <code>
                                const [count, setCount] = useState(0);
                            </code>
                        </div>

                        <br />

                        <Button
                            type="primary"
                            danger
                            onClick={() => handleClick("useState")}
                        >
                            Explore Hook
                        </Button>
                    </Collapse.Panel>
                </Collapse>
            </div>
        </div>
    );
}