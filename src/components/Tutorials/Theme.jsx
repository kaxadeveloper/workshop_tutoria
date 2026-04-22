import { Button, DatePicker, Input, Progress, Slider, Space, Spin } from "antd";
import { useState } from "react";

export default function ThemeTab() {

    const IconSlider = ({ min, max }) => {
        const [value, setValue] = useState(0);

        const gradient = `
            linear-gradient(
                to top,
                #fcc5e4 0%,
                #fda34b 15%,
                #ff7882 35%,
                #c8699e 52%,
                #7046aa 71%,
                #0c1db8 87%,
                #020f75 100%
            )
        `;

        return (
            <div
                style={{
                    minHeight: "100vh",
                    padding: 20,
                    transition: "0.5s ease",
                    position: "relative",
                    background: "#fff",
                    overflow: "hidden"
                }}
            >
                {/* Background layer */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: gradient,
                        opacity: value / max,
                        transition: "0.5s ease",
                        zIndex: 0
                    }}
                />

                {/* Content layer */}
                <div style={{ position: "relative", zIndex: 1 }}>
                    <Space
                        direction="vertical"
                        align="center"
                        size="large"
                        style={{ width: "100%" }}
                    >
                        <Button type="primary">Button</Button>

                        <Input placeholder="Type here..." style={{ width: 200 }} />

                        <Progress percent={50} type="circle" />

                        <Spin spinning />

                        <DatePicker style={{ width: 200 }} />

                        <Slider
                            min={min}
                            max={max}
                            value={value}
                            onChange={setValue}
                            style={{ width: 200 }}
                        />
                    </Space>
                </div>
            </div>
        );
    };

    return <IconSlider min={0} max={100} />;
}