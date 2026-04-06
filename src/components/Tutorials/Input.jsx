import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function InputTab () {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Input.Search
            placeholder="Name"
            maxLength={10}
            prefix={<UserOutlined />}
            allowClear
            ></Input.Search>
        </div>
    )
}