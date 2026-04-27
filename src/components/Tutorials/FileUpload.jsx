import { Button, Upload } from "antd";

export default function FileUploadTab() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Upload.Dragger
                action={"http://localhost:5173/"}>
                Drag files here OR
                <br />
                <Button>Click Upload</Button>
            </Upload.Dragger>
        </div>
    );
}