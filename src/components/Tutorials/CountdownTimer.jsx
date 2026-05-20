import { FieldTimeOutlined } from "@ant-design/icons";
import { Statistic } from "antd";
const { Countdown } = Statistic
export default function CountdownTimerTab() {
    return (
        <div>
            <Countdown
                title={
                    <p style={{ color: "blue" }}>
                        <FieldTimeOutlined /> Countdown Timer
                    </p>
                }
                value={new Date().setMinutes(new Date().getMinutes() + 2)}
                valueStyle={{ color: "red" }}
            />
            <Countdown
                title={
                    <p style={{ color: "blue" }}>
                        <FieldTimeOutlined /> Countdown Timer
                    </p>
                }
                value={new Date().setMinutes(new Date().getMinutes() + 2)}
                valueStyle={{ color: "red" }}
                prefix={"Sale Ending in"}
                suffix={<p style={{ color: "green" }}>Hurry Up!</p>}
            />
        </div>
    );
}