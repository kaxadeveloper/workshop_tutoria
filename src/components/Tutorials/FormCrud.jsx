import { Form, Input } from "antd";

export default function FormCrudTab() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh"
            }}
        >
            <Form>
                <Form.Item name={"teacher"} label="Teacher Name">
                    <Input placeholder="Teacher Name" />
                </Form.Item>
                <Form.Item name={"class"} label="Class Name">
                    <Input placeholder="Class Name" />
                </Form.Item>
                <Form.List name={"students"}>
                    {(fields, Operation) => (
                        <>
                            {fields.map((field, index) => {
                                return <Form.Item name={[field.name, "first"]} label={`${index + 1}-Student`}>
                                    <Input placeholder="First Name" />
                                </Form.Item>
                            })}
                        </>
                    )}
                </Form.List>
            </Form>
        </div>
    );
}