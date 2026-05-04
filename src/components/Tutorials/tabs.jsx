import { Tabs } from "antd";

export default function TabsTab() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
        }}
        >
            <Tabs>
                <Tabs.TabPane tab="Tab 1" key="tab1">
                    <div>This is a content of tab1</div>
                </Tabs.TabPane>
            </Tabs>

        </div>
    );
}