import { Button, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

export default function FileUploadTab() {

    const props = {
        multiple: true,
        accept: ".png,.jpg,.jpeg,.doc,.docx",

        customRequest({ file, onSuccess }) {
            setTimeout(() => {
                onSuccess("ok");
                message.success(`${file.name} uploaded successfully`);
            }, 1500);
        },

        beforeUpload(file) {
            const isValid =
                file.type.includes("image") ||
                file.type.includes("word");

            if (!isValid) {
                message.error("Invalid file type");
                return Upload.LIST_IGNORE;
            }

            return true;
        },

        showUploadList: {
            showRemoveIcon: true
        },

        defaultFileList: [
            {
                uid: "1",
                name: "existing_file.png",
                status: "done"
            }
        ],

        progress: {
            size: 8
        }
    };

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Upload.Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>

                <p>Drag files here OR</p>

                <Button type="primary">
                    Click Upload
                </Button>
            </Upload.Dragger>
        </div>
    );
}