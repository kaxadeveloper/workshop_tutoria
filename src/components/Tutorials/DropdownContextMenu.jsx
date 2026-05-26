import { Dropdown, Menu } from "antd";

export default function DropdownContextMenuTab() {
    const menu = <Menu>
        
    </Menu>
    return (
        <div>
            <Dropdown 
            overlay={<p>This is a context menu</p>} 
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