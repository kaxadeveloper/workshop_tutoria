import { Switch } from "antd";

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
            <Switch />
            <Switch defaultChecked={true} />
        </div>
    )
}