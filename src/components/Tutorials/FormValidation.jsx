import { Form, Input } from "antd";

export default function FormValidationTab() {
    return (
        <div>
            <Form>
                <Form.Item name="fullName" label="Full Name">
                   <Input />
                </Form.Item>
            </Form>
        </div>
    );
}