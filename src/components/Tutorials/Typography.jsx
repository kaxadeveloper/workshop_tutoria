import { CheckOutlined, SmileFilled } from "@ant-design/icons";
import { Typography, Space } from "antd";
import { useState } from "react";
const { Title, Text, Paragraph, Link } = Typography;

export default function TypographyTab() {
    const [text, setText] = useState("Code with CodingMaster");
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            <Space direction="vertical">
                <Title level={3}>Code with CodingMaster</Title>
                <Title level={5}>Code with CodingMaster</Title>
                <Text>Code with CodingMaster</Text>
                <Text strong>Code with CodingMaster</Text>
                <Text underline>Code with CodingMaster</Text>
                <Text mark>Code with CodingMaster</Text>
                <Text disabled>Code with CodingMaster</Text>
                <Text type="success">Code with CodingMaster</Text>
                <Link href="https://www.google.com/" underline target="blank">
                    Code with CodingMaster
                </Link>
                <Paragraph strong>Code with CodingMaster</Paragraph>
                <Paragraph editable={{
                    onChange: (value) => {
                        setText(value);
                    },
                    triggerType: "icon|text",
                    tooltip: "Click to edit",
                }}
                >
                    {text}
                </Paragraph>
                <Paragraph editable={{
                    onChange: (value) => {
                        setText(value);
                    },
                    triggerType: "icon|text",
                    tooltip: "Click to edit",
                    icon: <SmileFilled />,
                    enterIcon: <CheckOutlined />,
                }}
                >
                    {text}
                </Paragraph>
                <Paragraph copyable={{
                    text: "Different Text Copied",
                    tooltips: ["Click to copy", "Done"],
                }}
                >
                    Code with CodingMaster
                </Paragraph>
                <Paragraph
                    style={{ width: "200px" }}
                    ellipsis={{
                        rows: 2,
                        expandable: true,
                        symbol: "show more",
                    }}
                >
                    Code with CodingMaster,
                    Code with CodingMaster,
                    Code with CodingMaster,
                    Code with CodingMaster,
                    Code with CodingMaster,
                    Code with CodingMaster,
                    Code with CodingMaster,
                </Paragraph>
            </Space>
        </div>
    );
}