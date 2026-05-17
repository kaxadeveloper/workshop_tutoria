import { Button, Form, Input } from "antd";

function PlayerScors({ value, onChange }) {
    return
    <>
        <Button onClick={() => {
            onChange(value - 1)
        }}
        >
            -
        </Button>
        <span>{value}</span>
        <Button
            onClick={() => {
                onChange(value + 1)
            }}
        >
            +
        </Button>
    </>
}

export default function FormControlsTab() {
    return (
        <div>
            <Form
                onFinish={(values) => {

                }}
                onFinishFailed={(failedValues) => {

                }}
                initialValues={{ playerScore: 0 }}
            >
                <Form.Item
                    name={"playerName"}
                    label="Player Name"
                    required
                    rules={[{ required: true, message: "Please enter player name." }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={"playerScore"}
                    label="Player Score"
                    required
                    rules={[{ required: true, message: "Please enter player name." }]}
                >
                    <PlayerScors />
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