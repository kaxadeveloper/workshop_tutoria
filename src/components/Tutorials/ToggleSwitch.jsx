import { Switch } from "antd";

export default function ToggleSwitchTab() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh"
            }}
        >
          <Switch />
          <Switch defaultChecked={true} />
        </div>
    );
}