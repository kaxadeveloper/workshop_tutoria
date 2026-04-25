import { Button } from "antd"
import { useState } from "react"
import { PoweroffOutlined } from "@ant-design/icons";

export default function MyButton() {
    const [loading, setLoading] = useState(false);

    const onButtonClick = (e) => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
                type="primary"
                loading={loading}
                icon={<PoweroffOutlined />}
                className="my-button"
                style={{ backgroundColor: 'green', color: 'white', textAlign:"center" }}
                onClick={onButtonClick}
            >My First Button</Button>
        </div>
    )
}