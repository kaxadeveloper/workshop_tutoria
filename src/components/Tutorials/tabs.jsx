import {
    AmazonOutlined,
    AndroidOutlined,
    AppleOutlined,
    EditOutlined,
  } from "@ant-design/icons";
  import { Space, Tabs, Input } from "antd";
  import { useRef, useState } from "react";
  
  export default function TabsTab() {
    const nextTabIndex = useRef(4);
  
    const [activeKey, setActiveKey] = useState("tab1");
    const [editingKey, setEditingKey] = useState(null);
  
    const [tabsList, setTabsList] = useState([
      { label: "🍎 Apple", key: "tab1", icon: <AppleOutlined /> },
      { label: "🤖 Android", key: "tab2", icon: <AndroidOutlined /> },
      { label: "🛒 Amazon", key: "tab3", icon: <AmazonOutlined /> },
    ]);
  
    // ➕ Add Tab
    const addTab = () => {
      const newKey = `tab${nextTabIndex.current}`;
      const newTab = {
        label: `New Tab ${nextTabIndex.current}`,
        key: newKey,
      };
  
      setTabsList((prev) => [...prev, newTab]);
      setActiveKey(newKey);
      nextTabIndex.current++;
    };
  
    // ❌ Remove Tab
    const removeTab = (targetKey) => {
      if (tabsList.length === 1) return;
  
      let newActiveKey = activeKey;
      let lastIndex = -1;
  
      const newTabs = tabsList.filter((tab, i) => {
        if (tab.key === targetKey) {
          lastIndex = i - 1;
        }
        return tab.key !== targetKey;
      });
  
      if (newTabs.length && newActiveKey === targetKey) {
        newActiveKey =
          newTabs[lastIndex >= 0 ? lastIndex : 0].key;
      }
  
      setTabsList(newTabs);
      setActiveKey(newActiveKey);
    };
  
    // ✏️ Rename Tab
    const renameTab = (key, newLabel) => {
      setTabsList((prev) =>
        prev.map((tab) =>
          tab.key === key ? { ...tab, label: newLabel } : tab
        )
      );
    };
  
    const onEdit = (targetKey, action) => {
      if (action === "add") addTab();
      else removeTab(targetKey);
    };
  
    // 🎯 Convert to antd items
    const items = tabsList.map((tab) => ({
      key: tab.key,
      label:
        editingKey === tab.key ? (
          <Input
            size="small"
            autoFocus
            defaultValue={tab.label}
            onPressEnter={(e) => {
              renameTab(tab.key, e.target.value);
              setEditingKey(null);
            }}
            onBlur={(e) => {
              renameTab(tab.key, e.target.value);
              setEditingKey(null);
            }}
          />
        ) : (
          <span onDoubleClick={() => setEditingKey(tab.key)}>
            {tab.icon} {tab.label} <EditOutlined style={{ fontSize: 12 }} />
          </span>
        ),
      children: <div>📄 Content of {tab.label}</div>,
      closable: tab.key !== "tab1", // keep first tab fixed
    }));
  
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Space size={30} direction="vertical" style={{ width: "600px" }}>
          
          {/* 🔹 Basic Tabs */}
          <Tabs
            items={[
              {
                key: "1",
                label: "Simple Tab 1",
                children: "Content 1",
              },
              {
                key: "2",
                label: "Simple Tab 2",
                children: "Content 2",
              },
            ]}
          />
  
          {/* 🔹 Left Positioned */}
          <Tabs
            tabPlacement="left"
            items={[
              { key: "1", label: "Left 1", children: "Content 1" },
              { key: "2", label: "Left 2", children: "Content 2" },
            ]}
          />
  
          {/* 🔹 Icon Tabs */}
          <Tabs
            items={[
              {
                key: "1",
                label: (
                  <span>
                    <AppleOutlined /> Apple
                  </span>
                ),
                children: "Apple Content",
              },
              {
                key: "2",
                label: (
                  <span>
                    <AndroidOutlined /> Android
                  </span>
                ),
                children: "Android Content",
              },
              {
                key: "3",
                label: (
                  <span>
                    <AmazonOutlined /> Amazon
                  </span>
                ),
                children: "Amazon Content",
              },
            ]}
          />
  
          {/* 🔥 Advanced Editable Tabs */}
          <Tabs
            type="editable-card"
            activeKey={activeKey}
            onChange={setActiveKey}
            onEdit={onEdit}
            items={items}
          />
        </Space>
      </div>
    );
  }