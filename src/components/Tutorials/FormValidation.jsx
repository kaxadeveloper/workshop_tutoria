import { Form, Button, Checkbox, DatePicker, Input, Select } from "antd";

export default function FormValidationTab() {
    return (
        <div>
            <Form>
                <Form.Item name="fullName" label="Full Name">
                    <Input placeholder="Type your name" />
                </Form.Item>

                <Form.Item name="email" label="Email">
                    <Input placeholder="Type your email" />
                </Form.Item>
            </Form>
        </div>
    );
}