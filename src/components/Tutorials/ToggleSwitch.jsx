import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Space, Switch } from "antd";

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
            <Space size={12} direction="vertical">
                <Switch />
                <Switch defaultChecked={true} />
                <Switch
                    defaultChecked={true} checkedChildren="On" unCheckedChildren="Off"
                />
                <Switch
                    defaultChecked={true} checkedChildren="Longer text for On"
                    unCheckedChildren="Longer text for Off"
                />
                <Switch
                    defaultChecked={true} checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    onChange={(checked) => {
                        console.log("Switch is checked:", checked);
                    }}
                    disabled={true}
                />
                <Switch
                    defaultChecked={true} 
                    loading={true}
                />
            </Space>
        </div>
    );
}