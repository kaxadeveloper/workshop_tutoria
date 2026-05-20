import { DollarCircleFilled, FieldTimeOutlined } from "@ant-design/icons";
import { Divider, Statistic } from "antd";
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
                        <Divider />
                        <DollarCircleFilled /> Sale
                    </p>
                }
                format={"HH:mm:ss:SSS"}
                value={new Date().setMinutes(new Date().getMinutes() + 2)}
                valueStyle={{ color: "red" }}
                prefix={<p style={{ color: "brown"}}>Sale Ending in</p>}
                suffix={<p style={{ color: "green" }}>Hurry Up!</p>}
            />
        </div>
    );
}