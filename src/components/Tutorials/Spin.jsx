import { Button, Spin } from "antd";
import { useState } from "react";

export default function SpinTab() {
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <Spin spinning={loading}></Spin>
            <Button onClick={() => { setLoading(preValue => !preValue) }}>Toggle Spinning</Button>
            <Spin spinning = {loading}>
                <p>P tag 1</p>
                <p>P tag 2</p>
                <p>P tag 3</p>
            </Spin>
        </div>
    )
}