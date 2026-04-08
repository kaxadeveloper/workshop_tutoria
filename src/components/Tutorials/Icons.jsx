import Icon, { AppleFilled, BankTwoTone, HeartFilled, LoadingOutlined, LogoutOutlined, PieChartFilled } from "@ant-design/icons";
import { Button, Divider } from "antd";

export default function IconsTab() {
    const HeartIcon = (props) => {
        return <Icon 
        component={() => {
            return 
        }}

        {...props}
        />
    }

    return (
        <div>
            <PieChartFilled style={{color:'purple', fontSize:100}}/>
            <AppleFilled style={{color:'green', fontSize:100}}/>
            <LoadingOutlined spin style={{color:'red', fontSize:100}}/>
            <PieChartFilled rotate={45} style={{color:'orange', fontSize:100}}/>
            <BankTwoTone twoToneColor='green' style={{ fontSize:100}}/>
            <Divider />
            <HeartFilled style={{ color: "red", fontSize: 200 }}/>
            <Divider />
            <Button icon = {
                <LogoutOutlined style={{ color: "red", fontSize: 14}}/>
            }>Button with Custom Icon</Button>
            <Divider />
            <p style={{color:'black', fontSize:30}}>I <HeartFilled style={{ color: "hotPink", fontSize: 30 }}/> AntDesign</p>
        </div>
    )
}