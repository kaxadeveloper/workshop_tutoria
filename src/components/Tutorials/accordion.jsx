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
                <Collapse.Panel key={"1"} header="This is a panel 1">
                    <Typography.Text>This is a content of Panel 1</Typography.Text>
                </Collapse.Panel>
                <Collapse.Panel key={"2"} header="This is a panel 2">
                    <Typography.Text>This is a content of Panel 2</Typography.Text>
                </Collapse.Panel>
                <Collapse.Panel key={"3"} header="This is a panel 3">
                    <Typography.Text>This is a content of Panel 3</Typography.Text>
                </Collapse.Panel>
            </Collapse>
        </div>
    );
}