import { Collapse, Typography } from "antd";

export default function AccordionTab() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh'
            }}
        >
            <Collapse>
                <Collapse.Panel header="This is a panel 1">
                    <Typography.Text>This is a content of Panel 1</Typography.Text>
                </Collapse.Panel>
            </Collapse>
        </div>
    );
}