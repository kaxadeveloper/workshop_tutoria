import { Typography } from "antd";

export default function StylingTab() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh"
        }}
        >
            <Typography.Text
                style={{
                    color: "red",
                    fontSize: 20,
                    fontWeight: "bold"
                }}>
                CodingMaster
            </Typography.Text>
        </div>
    );
}