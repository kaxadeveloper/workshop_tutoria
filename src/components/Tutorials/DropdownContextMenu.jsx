import {
    CopyOutlined,
    DeleteOutlined,
    FacebookFilled,
    InstagramFilled,
    ReloadOutlined,
    ShareAltOutlined,
    TwitterCircleFilled,
  } from "@ant-design/icons";
  
  import { Dropdown, message } from "antd";
  
  export default function DropdownContextMenuTab() {
    const items = [
      {
        label: "Copy",
        key: "copy",
        icon: <CopyOutlined />,
      },
      {
        label: "Share",
        key: "share",
        icon: <ShareAltOutlined />,
        children: [
          {
            label: "Facebook",
            key: "fb",
            icon: <FacebookFilled />,
          },
          {
            label: "Twitter",
            key: "tw",
            icon: <TwitterCircleFilled />,
          },
          {
            label: "Instagram",
            key: "in",
            icon: <InstagramFilled />,
          },
        ],
      },
      {
        label: "Reload",
        key: "reload",
        icon: <ReloadOutlined />,
      },
      {
        label: "Delete",
        key: "delete",
        danger: true,
        icon: <DeleteOutlined />,
      },
    ];
  
    const handleMenuClick = ({ key }) => {
      message.info(`You clicked: ${key}`);
    };
  
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        {/* Context Menu Dropdown */}
        <Dropdown
          menu={{
            items,
            onClick: handleMenuClick,
          }}
          trigger={["contextMenu"]}
        >
          <div
            style={{
              width: 200,
              height: 200,
              backgroundColor: "lightgray",
              border: "1px dashed red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "context-menu",
              userSelect: "none",
            }}
          >
            Right Click Me
          </div>
        </Dropdown>
  
        {/* Click Dropdown */}
        <Dropdown
          menu={{
            items,
            onClick: handleMenuClick,
          }}
          trigger={["click"]}
        >
          <p
            style={{
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Click Me
          </p>
        </Dropdown>
      </div>
    );
  }