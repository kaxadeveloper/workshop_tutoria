import { Button, Form, Input } from "antd";

export default function FormControlsTab() {
    return (
        <div>
            <Form
                onFinish={(values) => {

                }}>
                <Form.Item
                    name={"playerName"}
                    label="Player Name"
                    required
                    rules={[{ required: true, message: "Please enter player name." }]}
                >
                    <Input />
                </Form.Item>
                <Button
                    htmlType="submit"
                    type="primary"
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
}