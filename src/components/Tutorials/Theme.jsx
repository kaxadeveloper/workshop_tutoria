import { Button, DatePicker, Input, Progress, Slider, Space, Spin } from "antd";
import { useState } from "react";

export default function ThemeTab() {

    const IconSlider = ({ min, max }) => {
        const [value, setValue] = useState(0);

        return (
            <div style={{ padding: 20 }}>
                <Space direction="vertical" align="center" size="large" style={{ width: "100%" }}>

                    <Button type="primary">Button</Button>

                    <Input placeholder="Type here..." />

                    <Progress percent={50} type="circle" />

                    <Spin spinning />

                    <DatePicker style={{ width: "100%" }} />

                    <Slider
                        min={min}
                        max={max}
                        value={value}
                        onChange={setValue}
                        style={{ width: 200 }}
                    />

                </Space>
            </div>
        );
    };

    return <IconSlider min={0} max={100} />;
}