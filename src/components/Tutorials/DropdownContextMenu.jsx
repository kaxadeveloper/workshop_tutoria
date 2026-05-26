import { CopyOutlined, DeleteOutlined, FacebookFilled, InstagramFilled, ReloadOutlined, ShareAltOutlined, TwitterCircleFilled } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";

export default function DropdownContextMenuTab() {
    const menu = <Menu
        items={[
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
                ]
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
        ]}>

    </Menu>
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
            }}
        >
            <Dropdown
                overlay={menu}
                trigger={["contextMenu"]}
            >
                <div
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: "lightgray",
                        border: "1px dashed red",
                    }}
                >
                    Right Click Me
                </div>
            </Dropdown>
        </div>
    )
}