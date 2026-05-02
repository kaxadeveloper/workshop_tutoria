import { Divider, Select, Switch, ColorPicker, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

// 🔁 Reusable Divider Component
function CustomDivider({ text, color, dashed, orientation, icon }) {
    return (
        <Divider
            dashed={dashed}
            orientation={orientation}
            style={{ borderColor: color }}
            className="animated-divider"
        >
            {icon && <SmileOutlined style={{ marginRight: 8 }} />}
            {text}
        </Divider>
    );
}

export default function DividerTab() {
    const [dashed, setDashed] = useState(false);
    const [orientation, setOrientation] = useState("center");
    const [color, setColor] = useState("#1677ff");
    const [showSection, setShowSection] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // 📱 Responsive behavior
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            style={{
                padding: 40,
                display: "flex",
                flexDirection: "column",
                gap: 20
            }}
        >
            <h2>Advanced Divider Playground</h2>

            {/* 🎛 Controls */}
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                <div>
                    <span>Dashed:</span><br />
                    <Switch checked={dashed} onChange={setDashed} />
                </div>

                <div>
                    <span>Orientation:</span><br />
                    <Select
                        value={orientation}
                        onChange={setOrientation}
                        style={{ width: 120 }}
                        options={[
                            { value: "left", label: "Left" },
                            { value: "center", label: "Center" },
                            { value: "right", label: "Right" }
                        ]}
                    />
                </div>

                <div>
                    <span>Color:</span><br />
                    <ColorPicker
                        value={color}
                        onChange={(c) => setColor(c.toHexString())}
                    />
                </div>

                <div>
                    <span>Toggle Section:</span><br />
                    <Button onClick={() => setShowSection(!showSection)}>
                        {showSection ? "Hide" : "Show"}
                    </Button>
                </div>
            </div>

            {/* 🔥 Dynamic Divider */}
            <CustomDivider
                text="Dynamic Divider"
                color={color}
                dashed={dashed}
                orientation={isMobile ? "center" : orientation}
                icon
            />

            <p>
                This divider updates based on user input (color, dashed, orientation, responsive).
            </p>

            {/* 👇 Toggle Section */}
            {showSection && (
                <>
                    <CustomDivider
                        text="Toggle Section"
                        color="orange"
                        dashed
                        orientation="left"
                    />
                    <p>This section can be shown or hidden.</p>
                </>
            )}

            {/* 🎨 Examples */}
            <CustomDivider text="Left Text" color="red" orientation="left" />
            <CustomDivider text="Right Text" color="green" orientation="right" />
            <CustomDivider text="With Icon" color="purple" icon />

            {/* 📏 Vertical Divider Example */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span>Link 1</span>
                <Divider type="vertical" />
                <span>Link 2</span>
                <Divider type="vertical" />
                <span>Link 3</span>
            </div>

            {/* 🎬 Animated Divider */}
            <Divider className="animated-divider">
                Hover Me
            </Divider>

            {/* 🎯 Inline Styles for animation */}
            <style>
                {`
                .animated-divider {
                    transition: all 0.3s ease;
                }
                .animated-divider:hover {
                    border-color: red !important;
                }
                `}
            </style>
        </div>
    );
}