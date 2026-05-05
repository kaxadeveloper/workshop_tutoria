import { useState } from "react";
import { Tabs, Modal, Button } from "antd";
import { createStaticStyles } from "antd-style";

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
import FormValidationTab from "./FormValidation";
import TablePaginationTab from "./TablePagination";
import FileUploadTab from "./FileUpload";
import TagsTab from "./Tags";
import EditableTableCellsTab from "./EditableTableCells";
import CustomizePaginationTab from "./CustomizePagination";
import TypographyTab from "./Typography";
import DividerTab from "./Divider";
import MenuTab from "./Menu";
import TabsTab from "./tabs";
import AvatarTab from "./Avatar";

// Curtain Menu Styles
const classNames = createStaticStyles(({ css }) => ({
    root: css`
    overflow: hidden;
    border-radius: 12px;
  `,
}));

const tabStyles = {
    root: {
        minHeight: "500px",
        borderRadius: 12,
        overflow: "hidden",
    },

    header: {
        background: "#001529",
        width: "230px",
        paddingTop: "15px",
    },

    item: {
        color: "#fff",
        fontWeight: "500",
        padding: "14px 20px",
        margin: "6px 10px",
        borderRadius: "8px",
        transition: "all .35s ease",
    },

    indicator: {
        backgroundColor: "#1677ff",
        width: "4px",
    },

    content: {
        background: "#f5f5f5",
        padding: "25px",
        minHeight: "500px",
        animation: "fadeSlide .4s ease",
    },
};

export default function Tutorial() {
    const [open, setOpen] = useState(false);

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
            children: <DatePickerTab />,
        },
        {
            key: "7",
            label: "Spinner",
            children: <SpinTab />,
        },
        {
            key: "8",
            label: "Progress",
            children: <ProgressTab />,
        },
        {
            key: "9",
            label: "Pagination",
            children: <PaginationTab />,
        },
        {
            key: "10",
            label: "Table1",
            children: <TableTab1 />,
        },
        {
            key: "11",
            label: "Icons",
            children: <IconsTab />,
        },
        {
            key: "12",
            label: "TableCrud",
            children: <TableCrudTab />,
        },
        {
            key: "13",
            label: "Search",
            children: <TableSearchTab />,
        },
        {
            key: "14",
            label: "Theme",
            children: <ThemeTab />,
        },
        {
            key: "15",
            label: "Validation",
            children: <FormValidationTab />,
        },
        {
            key: "16",
            label: "TablePagination",
            children: <TablePaginationTab />,
        },
        {
            key: "17",
            label: "FileUpload",
            children: <FileUploadTab />,
        },
        {
            key: "18",
            label: "Tags",
            children: <TagsTab />,
        },
        {
            key: "19",
            label: "EditableTableCells",
            children: <EditableTableCellsTab />
        },
        {
            key: "20",
            label: "CustomizePagination",
            children: <CustomizePaginationTab />
        },
        {
            key: "21",
            label: "Typography",
            children: <TypographyTab />
        },
        {
            key: "22",
            label: "Divider",
            children: <DividerTab />
        },
        {
            key: "23",
            label: "Menu",
            children: <MenuTab />
        },
        {
            key: "24",
            label: "Tabs",
            children: <TabsTab />
        },
        {
            key: "25",
            label: "Avatar",
            children: <AvatarTab />
        },
    ];

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#eef2f7",
            }}
        >
            <Button
                size="large"
                type="primary"
                onClick={() => setOpen(true)}
            >
                Open Tutorial
            </Button>

            <Modal
                title="Ant Design Tutorial"
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                centered
                width={1000}
            >
                <Tabs
                    items={items}
                    tabPosition="left"
                    defaultActiveKey="1"
                    classNames={classNames}
                    styles={tabStyles}
                />
            </Modal>

            <style>
                {`
        @keyframes fadeSlide{
          from{
            opacity:0;
            transform:translateX(25px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        .ant-tabs-tab:hover{
          transform: translateX(8px); /* Curtain slide effect */
          background:#1677ff33;
        }

        .ant-tabs-tab-active{
          background:#1677ff !important;
          border-radius:8px;
        }

        .ant-tabs-tab-active .ant-tabs-tab-btn{
          color:white !important;
        }
        `}
            </style>
        </div>
    );
}