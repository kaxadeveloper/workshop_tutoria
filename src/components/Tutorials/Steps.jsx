import { Divider, Steps } from "antd";
import { useState } from "react";

export default function StepsTab() {
    const [current, setCurrent] = useState(1);
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
                style={{
                    width: "100%",
                    maxWidth: "500px",
                }}
                current={current}
                labelPlacement="vertical"
                onChange={(c) => {
                    setCurrent(c);
                }}
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
                style={{
                    width: "100%",
                    maxWidth: "500px",
                }}
                current={1}
                progressDot={true}
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