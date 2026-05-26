import { CopyOutlined, DeleteOutlined, ReloadOutlined, ShareAltOutlined } from "@ant-design/icons";
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
            },
            {
                label: "Reload",
                key: "reload",
                icon: <ReloadOutlined />,
            },
            {
                label: "Delete",
                key: "delete",
                icon: <DeleteOutlined />,
            },
        ]}>

    </Menu>
    return (
        <div>
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