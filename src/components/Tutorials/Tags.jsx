import { useState } from "react";
import { Button, Space, Tag, Input } from "antd";
import {
  DeleteOutlined,
  Loading3QuartersOutlined,
  PlusOutlined,
  UndoOutlined,
} from "@ant-design/icons";

export default function TagsTab() {
  const initialTags = [
    { id: 1, label: "Tag", color: "default" },
    { id: 2, label: "Tag2", color: "default" },
    { id: 3, label: "Warning", color: "warning" },
    { id: 4, label: "Error", color: "error" },
    { id: 5, label: "Custom Color", color: "#f0f" },
  ];

  const [tags, setTags] = useState(initialTags);
  const [deletedTags, setDeletedTags] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);

  // remove tag
  const handleClose = (tagId) => {
    const removed = tags.find((tag) => tag.id === tagId);
    setDeletedTags((prev) => [...prev, removed]);
    setTags((prev) => prev.filter((tag) => tag.id !== tagId));
  };

  // restore last deleted tag
  const undoDelete = () => {
    if (!deletedTags.length) return;

    const restored = deletedTags[deletedTags.length - 1];

    setTags((prev) => [...prev, restored]);
    setDeletedTags((prev) => prev.slice(0, -1));
  };

  // add new tag
  const addTag = () => {
    if (!input.trim()) return;

    setTags((prev) => [
      ...prev,
      {
        id: Date.now(),
        label: input,
        color: "processing",
      },
    ]);

    setInput("");
  };

  // selectable tags
  const toggleSelected = (label) => {
    setSelected((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
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
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            closable
            color={tag.color}
            onClose={(e) => {
              e.preventDefault(); // prevents instant removal animation
              handleClose(tag.id);
            }}
            closeIcon={<DeleteOutlined />}
          >
            {tag.label}
          </Tag>
        ))}

        <Tag
          closable
          style={{
            backgroundColor: "red",
            color: "yellow",
            borderColor: "blue",
            borderRadius: 10,
          }}
          onClose={(e) => {
            e.preventDefault();
            alert("Custom tag removed");
          }}
          closeIcon={
            <DeleteOutlined
              style={{
                color: "white",
                fontSize: 15,
              }}
            />
          }
        >
          Custom Styled Tag
        </Tag>

        <Tag
          icon={<Loading3QuartersOutlined spin={loading} />}
          color="processing"
        >
          {loading ? "Loading..." : "Completed"}
        </Tag>

        <Button onClick={() => setLoading(!loading)}>
          Toggle Loading
        </Button>

        <Space>
          <Input
            placeholder="Add new tag"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onPressEnter={addTag}
          />

          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={addTag}
          >
            Add
          </Button>

          <Button
            icon={<UndoOutlined />}
            onClick={undoDelete}
          >
            Undo Delete
          </Button>
        </Space>

        <h3>Selectable Filter Tags</h3>

        <Space wrap>
          {["React", "JavaScript", "CSS", "Ant Design"].map((item) => (
            <Tag
              key={item}
              color={selected.includes(item) ? "success" : "default"}
              onClick={() => toggleSelected(item)}
              style={{
                cursor: "pointer",
                padding: "6px 12px",
              }}
            >
              {item}
            </Tag>
          ))}
        </Space>
      </Space>
    </div>
  );
}