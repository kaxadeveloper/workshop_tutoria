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
                <Tabs.TabPane tab="Tab 2" key="tab2">
                    <div>This is a content of tab2</div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 3" key="tab3">
                    <div>This is a content of tab3</div>
                </Tabs.TabPane>
            </Tabs>

        </div>
    );
}