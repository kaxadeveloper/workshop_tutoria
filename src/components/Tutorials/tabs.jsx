import { AmazonOutlined, AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Space, Tabs } from "antd";
import { useRef, useState } from "react";

export default function TabsTab() {
    const nextTabIndex = useRef(3);
    const [tabsList, setTabsList] = useState([
        { tab: 'Tab 1', key: 'tab1' },
        { tab: 'Tab 2', key: 'tab2' }
    ]);

    const onEdit = (tabKey, action) => {
        if (action === 'add') {
            setTabsList(pre => [...pre,
            {
                tab: `Tab ${nextTabIndex.current}`, key: `tab${nextTabIndex.current}`,
            },
            ]);
            nextTabIndex.current += 1
        } else if (action === 'remove') {
          setTabsList((pre) => [...pre.filter((tab) => tab.key !== tabKey)])
        }
    }

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

                <Tabs defaultActiveKey="tab1" type="editable-card" onEdit={onEdit}>
                    {tabsList.map((tabInfo, index) => {
                        return (
                            <Tabs.TabPane
                                closable={index > 1}
                                tab={tabInfo.tab}
                                key={tabInfo.key}
                            >
                                <div>This is a content of {tabInfo.tab}</div>
                            </Tabs.TabPane>
                        );
                    })}
                </Tabs>
            </Space>
        </div>
    );
}