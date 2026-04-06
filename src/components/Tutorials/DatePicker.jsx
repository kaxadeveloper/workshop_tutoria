import { DatePicker, TimePicker } from "antd"

export default function DatePickerTab() {
    return (
        <div>
            <DatePicker picker='quarter'/>
            <DatePicker.RangePicker picker="month"/>
            <TimePicker />
        </div>
    )
}