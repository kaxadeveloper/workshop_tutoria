import { Dropdown } from "antd";

export default function DropdownContextMenuTab() {
    return (
        <div>
            <Dropdown>
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