"use client";
import React, { useState } from "react";
import {
    Button,
    Drawer,
    Form,
    Input,
    DatePicker,
    InputNumber,
    Space,
    message,
    Slider,
} from "antd";

const ModalFilters = ({ isOpened, onClose, columns }) => {
    
    const [form] = Form.useForm();
    const [formTouched, setFormTouched] = useState(false);

    // Filter only columns that are filterable
    const filterableColumns = columns.filter((col) => col.filterable);

    // Helper function to render input components based on column type
    const getInputComponent = (type) => {
        switch (type) {
            case "number":
                return <InputNumber/>;
            case "range":
                return <Slider />;
            case "datetime":
                return (
                    <DatePicker
                        showTime
                        format="DD-MM-YYYY HH:mm"
                        style={{ width: "100%" }}
                    />
                );
            default:
                return <Input allowClear />;
        }
    };

    const handleSubmit = (values) => {
        console.log("Form values:", values);
        message.success("Filters applied successfully");
    };

    return (
        <Drawer
            key="drawer-filters"
            open={isOpened}
            width={500}
            onClose={onClose}
            title="Apply Filters"
            extra={
                <Space>
                    <Button type="default" onClick={onClose}>
                        Close
                    </Button>
                    <Button
                        type="primary"
                        htmlType="submit"
                        form="form-filters"
                        loading={processing}
                        disabled={!formTouched || processing}
                    >
                        Apply Filters
                    </Button>
                </Space>
            }
        >
            <Form
                layout="vertical"
                name="form-filters"
                form={form}
                onFinish={handleSubmit}
                onValuesChange={() => setFormTouched(true)}
            >
                {filterableColumns.map((col) => (
                    <Form.Item
                        key={col.key}
                        label={col.title}
                        name={col.key}
                    >
                        {getInputComponent(col.type)}
                    </Form.Item>
                ))}
            </Form>
        </Drawer>
    );
};

export default ModalFilters;
