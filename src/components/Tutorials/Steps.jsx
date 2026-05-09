import { Steps } from "antd";

export default function StepsTab() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
            }}
        >
            <Steps
                current={1}
                items={[
                    {
                        title: "Finished",
                        description: "This step is completed",
                    },
                    {
                        title: "In Progress",
                        description: "Current working step",
                    },
                    {
                        title: "Waiting",
                        description: "Next upcoming step",
                    },
                ]}
            ></Steps>
        </div>
    );
}