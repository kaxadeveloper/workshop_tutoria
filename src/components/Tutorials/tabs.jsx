import { AmazonOutlined, AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Space, Tabs } from "antd";

export default function TabsTab() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
        }}
        >
            <Space size={30} direction="vertical">
                <Tabs defaultActiveKey="tab1">
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

                <Tabs defaultActiveKey="tab1" tabPosition="left">
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

                <Tabs defaultActiveKey="tab1">
                    <Tabs.TabPane
                        tab={
                            <span>
                                <AppleOutlined /> Apple  
                            </span>
                        }
                        key="tab1"
                    >
                        <div>This is a content of tab1</div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={
                            <span>
                                <AndroidOutlined /> Android  
                            </span>
                        } key="tab2">
                        <div>This is a content of tab2</div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={
                            <span>
                                <AmazonOutlined /> Amazon 
                            </span>
                        } key="tab3">
                        <div>This is a content of tab3</div>
                    </Tabs.TabPane>
                </Tabs>

                <Tabs defaultActiveKey="tab1">
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
            </Space>
        </div>
    );
}