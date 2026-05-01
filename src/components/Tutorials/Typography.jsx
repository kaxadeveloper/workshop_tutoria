import {
    CheckOutlined,
    SmileFilled,
    CopyOutlined,
    HighlightOutlined,
  } from "@ant-design/icons";
  import { Typography, Space, Input, Select, Tag } from "antd";
  import { useState } from "react";
  
  const { Title, Text, Paragraph, Link } = Typography;
  
  export default function TypographyTab() {
    const [title, setTitle] = useState("Code with CodingMaster");
    const [paragraph, setParagraph] = useState("Editable paragraph...");
    const [status, setStatus] = useState("success");
    const [search, setSearch] = useState("");
  
    const highlightText = (text, keyword) => {
      if (!keyword) return text;
  
      const parts = text.split(new RegExp(`(${keyword})`, "gi"));
  
      return parts.map((part, index) =>
        part.toLowerCase() === keyword.toLowerCase() ? (
          <mark key={index}>{part}</mark>
        ) : (
          part
        )
      );
    };
  
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Space direction="vertical" size={12}>
          {/* Editable Title with limit */}
          <Title
            level={3}
            editable={{
              onChange: setTitle,
              maxLength: 30,
              tooltip: "Edit title (max 30 chars)",
            }}
          >
            {title}
          </Title>
  
          {/* Status selector */}
          <Select
            value={status}
            onChange={setStatus}
            style={{ width: 200 }}
            options={[
              { value: "success", label: "Success" },
              { value: "warning", label: "Warning" },
              { value: "danger", label: "Danger" },
            ]}
          />
  
          <Text type={status}>
            Dynamic status text ({status})
          </Text>
  
          {/* Search + Highlight */}
          <Input
            placeholder="Search text..."
            prefix={<HighlightOutlined />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
  
          <Paragraph>
            {highlightText(
              "Code with CodingMaster is awesome for learning React.",
              search
            )}
          </Paragraph>
  
          {/* Editable Paragraph with icons */}
          <Paragraph
            editable={{
              onChange: setParagraph,
              icon: <SmileFilled />,
              enterIcon: <CheckOutlined />,
              tooltip: "Edit paragraph",
            }}
          >
            {paragraph}
          </Paragraph>
  
          {/* Copyable with custom icon */}
          <Paragraph
            copyable={{
              text: paragraph,
              icon: <CopyOutlined />,
              tooltips: ["Copy text", "Copied!"],
            }}
          >
            Click to copy this paragraph
          </Paragraph>
  
          {/* Ellipsis with toggle */}
          <Paragraph
            style={{ width: 250 }}
            ellipsis={{
              rows: 2,
              expandable: true,
              symbol: "Read more",
              onExpand: () => console.log("Expanded"),
            }}
          >
            This is a long paragraph. Code with CodingMaster teaches React,
            JavaScript, UI libraries, and advanced frontend concepts step by step.
          </Paragraph>
  
          {/* Keyboard hint */}
          <Tag color="blue">
            Tip: Press Enter to save edits
          </Tag>
  
          {/* External link */}
          <Link href="https://www.google.com" target="_blank">
            Visit Google
          </Link>
        </Space>
      </div>
    );
  }