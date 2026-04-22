import { useState } from "react";
import { Tabs, Modal, Button } from "antd";
import MyButton from "./Button";
import InputTab from "./Input";
import SelectTab from "./Select";
import FormTab from "./Form";
import TableTab from "./Table";
import DatePickerTab from "./DatePicker";
import SpinTab from "./Spin";
import ProgressTab from "./Progress";
import PaginationTab from "./Pagination";
import TableTab1 from "./Table1";
import IconsTab from "./Icons";
import TableCrudTab from "./TableCrud";
import TableSearchTab from "./TableSearch";
import ThemeTab from "./Theme";

export default function Tutorial() {
    const [open, setOpen] = useState(false); // modal is closed initially

    const items = [
        {
            key: "1",
            label: "Button",
            children: <MyButton />,
        },
        {
            key: "2",
            label: "Input",
            children: <InputTab />,
        },
        {
            key: "3",
            label: "Select",
            children: <SelectTab />,
        },
        {
            key: "4",
            label: "Form",
            children: <FormTab />,
        },
        {
            key: "5",
            label: "Table",
            children: <TableTab />,
        },
        {
            key: "6",
            label: "DatePicker",
            children: <DatePickerTab />
        },
        {
            key: "7",
            label: "Spinner",
            children: <SpinTab />
        },
        {
            key: "8",
            label: "ProgressBar",
            children: <ProgressTab />
        },
        {
            key: "9",
            label: "Pagination",
            children: <PaginationTab />
        },
        {
            key: "10",
            label: "Table1",
            children: <TableTab1 />
        },
        {
            key: "11",
            label: "Icons",
            children: <IconsTab />
        },
        {
            key: "12",
            label: "TableCrud",
            children: <TableCrudTab />
        },
        {
            key: "13",
            label: "TableSearch",
            children: <TableSearchTab />
        },
        {
            key: "14",
            label: "Theme",
            children: <ThemeTab />
        },
    ];

    return (
        <div style={{ height: "100vh", padding: "20px", display:"flex", alignItems: "center", justifyContent: "center"}}>
            {/* Welcome Button */}
            <Button type="primary" onClick={() => setOpen(true)}>
                Welcome
            </Button>

            {/* Modal with Tabs */}
            <Modal
                title="Welcome"
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                centered
            >
                <Tabs items={items} />
            </Modal>
        </div>
    );
}