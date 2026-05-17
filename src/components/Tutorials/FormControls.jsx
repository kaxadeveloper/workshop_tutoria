import { Button, Form, Input } from "antd";

function PlayerScors({ value, onChange }) {
    return (
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
    );
}

function AdminEmail({ value }) {
    return <span>{value}</span>
}

export default function FormControlsTab() {
    return (
        <div>
            <Form
                onFinish={(values) => {

                }}
                onFinishFailed={(failedValues) => {

                }}
                initialValues={{ playerScore: 0, adminEmail: "admin@gmail.com" }}
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
                    rules={[{
                        validator(rule, value) {
                            return new Promise((resolve, reject) => {
                                if (value >= 0) {
                                    resolve()
                                } else {
                                    reject("The score should be greater than 0.");
                                }
                            })
                        }
                    }]}
                >
                    <PlayerScors />
                </Form.Item>
                <Form.Item
                    name={"adminEmail"}
                    label="Admin Email"
                    required
                    rules={[
                        {
                            type: 'email',
                            message: 'It is not a valid email.',
                        },
                        {
                            validator(rule, value) {
                                return new Promise((resolve, reject) => {
                                    if (String(value).startsWith('admin')) {
                                        resolve();
                                    } else {
                                        reject("The email should start with admin keyword.");
                                    }
                                })
                            }
                        }
                    ]}
                >
                    <AdminEmail />
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