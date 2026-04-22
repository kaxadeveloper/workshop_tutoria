import { Button, Input, Progress, Space } from "antd";

export default function ThemeTab() {
    return (
        <div>
            <Space>
                <Button type="primary">Button</Button>
                <Input placeholder="Type here..."></Input>
                <Progress percent={50} type="circle" />
                <Spin spinning />
                
            </Space>
        </div>
    )
}