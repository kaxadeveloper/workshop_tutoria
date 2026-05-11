import { Switch } from "antd";

export default function ToggleSwitchTab() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh"
            }}
        >
          <Switch />
        </div>
    );
}