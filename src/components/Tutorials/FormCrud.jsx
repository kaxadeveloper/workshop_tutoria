import {
    DeleteOutlined,
    MinusCircleOutlined,
    PlusOutlined,
    UserOutlined,
} from "@ant-design/icons";
import {
    Button,
    Card,
    Divider,
    Form,
    Input,
    message,
    Select,
    Space,
    Typography,
} from "antd";

const { Title, Text } = Typography;

export default function FormCrudTab() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Submitted Values:", values);

        message.success("Class created successfully!");

        form.resetFields();

        form.setFieldsValue({
            teacher: "CodingMaster",
            students: [
                {
                    first: "",
                    last: "",
                    gender: "Male",
                },
            ],
        });
    };

    const initialValues = {
        teacher: "CodingMaster",
        class: "React Beginners",
        students: [
            {
                first: "David",
                last: "JSON",
                gender: "Male",
            },
        ],
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f5f5f5",
                padding: 20,
            }}
        >
            <Card
                style={{
                    width: 750,
                    borderRadius: 16,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                }}
            >
                <Title level={2} style={{ textAlign: "center" }}>
                    Student Management Form
                </Title>

                <Text type="secondary">
                    Add, edit, and remove students dynamically.
                </Text>

                <Divider />

                <Form
                    form={form}
                    layout="vertical"
                    initialValues={initialValues}
                    onFinish={onFinish}
                >
                    {/* Teacher */}
                    <Form.Item
                        label="Teacher Name"
                        name="teacher"
                        rules={[
                            {
                                required: true,
                                message: "Teacher name is required",
                            },
                        ]}
                    >
                        <Input
                            size="large"
                            prefix={<UserOutlined />}
                            placeholder="Teacher Name"
                        />
                    </Form.Item>

                    {/* Class */}
                    <Form.Item
                        label="Class Name"
                        name="class"
                        rules={[
                            {
                                required: true,
                                message: "Class name is required",
                            },
                        ]}
                    >
                        <Input
                            size="large"
                            placeholder="Class Name"
                        />
                    </Form.Item>

                    <Divider orientation="left">
                        Students
                    </Divider>

                    {/* Students List */}
                    <Form.List name="students">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map((field, index) => (
                                    <Card
                                        key={field.key}
                                        size="small"
                                        style={{
                                            marginBottom: 20,
                                            borderRadius: 12,
                                            background: "#fafafa",
                                        }}
                                        title={`Student ${index + 1}`}
                                        extra={
                                            fields.length > 1 && (
                                                <DeleteOutlined
                                                    onClick={() =>
                                                        remove(field.name)
                                                    }
                                                    style={{
                                                        color: "red",
                                                        fontSize: 18,
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            )
                                        }
                                    >
                                        <Space
                                            direction="vertical"
                                            style={{ width: "100%" }}
                                            size={16}
                                        >
                                            {/* First Name */}
                                            <Form.Item
                                                label="First Name"
                                                name={[field.name, "first"]}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "First name is required",
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="First Name" />
                                            </Form.Item>

                                            {/* Last Name */}
                                            <Form.Item
                                                label="Last Name"
                                                name={[field.name, "last"]}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Last name is required",
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="Last Name" />
                                            </Form.Item>

                                            {/* Gender */}
                                            <Form.Item
                                                label="Gender"
                                                name={[field.name, "gender"]}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Please select gender",
                                                    },
                                                ]}
                                            >
                                                <Select placeholder="Select Gender">
                                                    {["Male", "Female", "Other"].map(
                                                        (gender) => (
                                                            <Select.Option
                                                                key={gender}
                                                                value={gender}
                                                            >
                                                                {gender}
                                                            </Select.Option>
                                                        )
                                                    )}
                                                </Select>
                                            </Form.Item>
                                        </Space>
                                    </Card>
                                ))}

                                {/* Add Student Button */}
                                <Form.Item>
                                    <Button
                                        type="dashed"
                                        block
                                        size="large"
                                        icon={<PlusOutlined />}
                                        onClick={() =>
                                            add({
                                                first: "",
                                                last: "",
                                                gender: "Male",
                                            })
                                        }
                                    >
                                        Add New Student
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>

                    {/* Action Buttons */}
                    <Space
                        style={{
                            width: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        <Button
                            size="large"
                            onClick={() => form.resetFields()}
                        >
                            Reset
                        </Button>

                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                        >
                            Submit Form
                        </Button>
                    </Space>
                </Form>
            </Card>
        </div>
    );
}