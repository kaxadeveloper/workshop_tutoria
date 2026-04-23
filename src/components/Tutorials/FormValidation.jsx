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

                <Form.Item name="password" label="Password">
                    <Input.Password placeholder="Type your password" />
                </Form.Item>

                <Form.Item name="confirmPassword" label="Confirm Password">
                    <Input.Password placeholder="Confirm your password" />
                </Form.Item>

                <Form.Item name="gender" label="Gender">
                    <Select placeholder="Select your gender">
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                    </Select>
                </Form.Item>

                
            </Form>
        </div>
    );
}