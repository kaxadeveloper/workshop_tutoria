import { DollarCircleFilled, FieldTimeOutlined } from "@ant-design/icons";
import { Divider, Statistic } from "antd";
import { useState } from "react";
const { Countdown } = Statistic;

const CustomCountdown = () => {
    const [value, setValue] = useState(0);

    return (
        <Countdown
            title={"Countdown 100 Seconds"}
            value={new Date().setSeconds(new Date().getSeconds() + 100)}
            valueStyle={{ color: "red" }}
            onChange={(value) => {
                setValue(value);
            }}
            format={""}
            prefix={`Timer ending in ${Math.round(value / 1000)}`}
        />
    );
}

export default function CountdownTimerTab() {
    return (
        <div>
            <Countdown
                title={
                    <p style={{ color: "blue" }}>
                        <FieldTimeOutlined /> Countdown Timer
                    </p>
                }
                value={new Date().setSeconds(new Date().getSeconds() + 10)}
                valueStyle={{ color: "red" }}
                onFinish={() => {

                }}
            />
            <Countdown
                title={
                    <p style={{ color: "blue" }}>
                        <Divider />
                        <DollarCircleFilled style={{ color: "gold" }} /> Sale
                    </p>
                }
                format={"HH:mm:ss:SSS"}
                value={new Date().setMinutes(new Date().getMinutes() + 2)}
                valueStyle={{ color: "red" }}
                prefix={<p style={{ color: "brown" }}> Sale Ending in</p>}
                suffix={<p style={{ color: "green" }}>Hurry Up!</p>}
            />
            <Divider />
            <CustomCountdown />
        </div>
    );
}