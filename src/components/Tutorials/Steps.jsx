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
                current={1}
                labelPlacement="vertical"
                onChange={(c) => {

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
        </div>
    );
}