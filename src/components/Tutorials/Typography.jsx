import { Typography, Space } from "antd";
const { Title, Text, Paragraph, Link } = Typography;

export default function TypographyTab() {
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
                <Paragraph editable>Code with CodingMaster</Paragraph>
            </Space>
        </div>
    );
}