import { Space, Switch } from "antd";

export default function ToggleSwitcherTab() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Space size={12} direction="vertical">
                <Switch />
                <Switch defaultChecked={true} />
                <Switch
                    defaultChecked={true}
                    checkedChildren="On"
                    unCheckedChildren="Off"
                />
            </Space>
        </div>
    )
}