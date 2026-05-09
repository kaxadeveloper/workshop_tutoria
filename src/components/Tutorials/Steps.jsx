import { Divider, Steps } from "antd";

export default function StepsTab() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
            }}
        >
            <Steps
                current={1}
                items={[
                    {
                        title: "Finished"
                    },
                    {
                        title: "In Progress"
                    },
                    {
                        title: "Waiting"
                    },
                ]}
            />
            <Divider />
            <Steps
                current={1}
                labelPlacement="vertical"
                items={[
                    {
                        title: "Finished"
                    },
                    {
                        title: "In Progress"
                    },
                    {
                        title: "Waiting"
                    },
                ]}
            />
        </div>
    );
}