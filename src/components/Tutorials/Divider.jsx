import { Divider } from "antd";

export default function DividerTab() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh"
            }}
        >
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, rem vitae adipisci laboriosam exercitationem, dignissimos aperiam quo nam consequuntur ea, hic quibusdam qui minus id!
            </p>
            <Divider style={{ borderColor: "red", margin: 0 }} />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eaque nisi quae veritatis earum quis dignissimos, consectetur explicabo aliquid quasi ullam, recusandae a distinctio inventore!
            </p>
            <Divider dashed style={{ borderColor: "blue" }} />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eaque nisi quae veritatis earum quis dignissimos, consectetur explicabo aliquid quasi ullam, recusandae a distinctio inventore!
            </p>
            <Divider style={{ borderColor: "blue" }}>Text</Divider>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eaque nisi quae veritatis earum quis dignissimos, consectetur explicabo aliquid quasi ullam, recusandae a distinctio inventore!
            </p>
            <Divider style={{ borderColor: "orange" }} orientation="left">Text</Divider>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eaque nisi quae veritatis earum quis dignissimos, consectetur explicabo aliquid quasi ullam, recusandae a distinctio inventore!
            </p>
            <Divider style={{ borderColor: "orange" }} orientation="right">Text</Divider>
            <div>
                <span>Link</span>
                <Divider style={{ borderColor: "orange" }} type="vertical"></Divider>
                <span>Link</span>
                <Divider style={{ borderColor: "orange" }} type="vertical"></Divider>
                <span>Link</span>
                <Divider style={{ borderColor: "orange" }} type="vertical"></Divider>
                <span>Link</span>
            </div>
        </div>
    );
}