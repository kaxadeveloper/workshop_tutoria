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
            <Divider style={{ borderColor: "red" }}/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eaque nisi quae veritatis earum quis dignissimos, consectetur explicabo aliquid quasi ullam, recusandae a distinctio inventore!
            </p>
        </div>
    );
}