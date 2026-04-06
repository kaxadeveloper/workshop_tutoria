import { Select } from "antd";

export default function SelectTab() {
    const fruits = ['Banana', 'Mango', 'Orange', 'Cherry']

    return (
        <div style={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
            <p style={{ color: "black" }}>Which is your favorite fruit?</p>
            <Select mode="multiple"
            maxTagCount={2}
            allowClear
            placeholder='Select fruit' 
            style = {{width:'50%'}}>
                {fruits.map((fruit,index) => {
                    return <Select.Option key={index} value={fruit}>{fruit}</Select.Option>
                })}
            </Select>
        </div>
    )
}