import { Button, Spin, Upload } from "antd";

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
                multiple 
                listType="picture"
                action={"http://localhost:5173/"}
                showUploadList={{ showRemoveIcon: true }}
                accept=".png,.jpeg,.doc"
                beforeUpload={(file) => {
                    return false;
                }}
                defaultFileList={[
                    {
                        uid: "abc",
                        name: "exising_file.png",
                        status: "uploading", 
                        percent: 50,
                        url: "https://www.google.com/", 
                    },
                ]}
                iconRender={() => {
                    return <Spin></Spin>
                }}
                >
                Drag files here OR
                <br />
                <Button>Click Upload</Button>
            </Upload.Dragger>
        </div>
    );
}