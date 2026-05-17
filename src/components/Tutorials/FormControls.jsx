import { Button, Form, Input } from "antd";

function PlayerScors(props) {

    return
    <>
     <Button>-</Button>
     <span>{props.value}</span>
     <Button>+</Button>
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
                    name={"playerName"}
                    label="Player Name"
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