import { Typography, Space } from "antd";
const { Title, Text, Paragraph, Link } = Typography;

export default function TypographyTab() {
    return (
        <div>
            <Space direction="vertical">
                <Title level={3}>Code with CodingMaster</Title>
                <Title level={5}>Code with CodingMaster</Title>
                <Text>Code with CodingMaster</Text>
                <Text strong>Code with CodingMaster</Text>
                <Text underline>Code with CodingMaster</Text>
                <Text mark>Code with CodingMaster</Text>
                <Text disabled>Code with CodingMaster</Text>
                <Text type="success">Code with CodingMaster</Text>
            </Space>
        </div>
    );
}