import { Form, Button, Checkbox, DatePicker, Input, Select } from "antd";

export default function FormValidationTab() {
    return (
        <div>
            <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
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

                <Form.Item name="dob" label="Date of Birth">
                    <DatePicker picker="date" placeholder="Choose date of birth" />
                </Form.Item>

                <Form.Item name="website" label="Website">
                    <Input placeholder="Add your website url" />
                </Form.Item>

                <Form.Item name="agreement">
                    <Checkbox> Agree to our <a href="#">Terms and Conditions</a></Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Register</Button>
                </Form.Item>
            </Form>
        </div>
    );
}