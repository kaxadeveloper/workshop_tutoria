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
                  <Input placeholder="Teacher Name"/>
              </Form.Item>
            </Form>
        </div>
    );
}