import { Progress } from "antd";

export default function ProgressTab () {
    return (
        <div>
            <Progress percent={33} />
            <Progress percent={33} type="circle"/>
            <Progress percent={33} type="line" strokeColor="red" status="active"/>
            <Progress percent={33} type="line" strokeColor="red" strokeWidth={50} status="active"/>
            <Progress percent={33} type="circle" status="success" />
            <Progress percent={33} type="circle" status="exception" />
            <Progress percent={33} type="line" status="success" />
            <Progress percent={33} type="line" steps={3} />
        </div>
    )
}