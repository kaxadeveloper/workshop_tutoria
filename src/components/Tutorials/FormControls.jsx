import { Form, Input } from "antd";

export default function FormControlsTab() {
    return (
        <div>
            <Form>
                <Form.Item
                    name={"playerName"}
                    label="Player Name"
                >
                    <Input />
                </Form.Item>
                
            </Form>
        </div>
    );
}