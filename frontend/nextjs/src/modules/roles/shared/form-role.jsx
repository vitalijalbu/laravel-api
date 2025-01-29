"use client";
import React, { useState, useEffect } from "react";
import {
    Checkbox,
    Col,
    Form,
    Row,
    Table,
    Input,
    ColorPicker,
    message,
    Card,
    Divider,
    Typography,
    Space,
    Button,
} from "antd";
const { Title } = Typography;

import {
    IconPencilMinus,
    IconTable,
    IconTablePlus,
    IconTrash,
} from "@tabler/icons-react";
import { getIcon } from "@/utils/icons";

const FormRole = (props) => {
    const { initialData } = props;
    const [formData, setFormData] = useState({
        name: "",
        color: "",
        permissions: initialData?.permissions || [],
    });

    // Handle checkbox changes
    const handlePermissionChange = (recordKey, permissionType, checked) => {
        setFormData((prevData) => ({
            ...prevData,
            permissions: prevData.permissions.map((item) =>
                item.key === recordKey
                    ? {
                          ...item,
                          permissions: {
                              ...item.permissions,
                              [permissionType]: checked,
                          },
                      }
                    : item
            ),
        }));
    };

    // Define table columns
    const columns = [
        {
            title: "Page",
            key: "pageName",
            render: (record) => (
                <Space>
                    {getIcon(record?.key)}
                    {record?.label}
                </Space>
            ),
        },
        {
            title: (
                <Space>
                    <IconTablePlus color="#28a745" size={20} />
                    Create
                </Space>
            ),
            dataIndex: "permissions",
            key: "create",
            render: (_, record) => (
                <Checkbox
                    key={record.key}
                    checked={record.permissions.create}
                    onChange={(e) =>
                        handlePermissionChange(
                            record.key,
                            "create",
                            e.target.checked
                        )
                    }
                />
            ),
        },
        {
            title: (
                <Space>
                    <IconTable color="#007bff" size={20} />
                    Read
                </Space>
            ),
            dataIndex: "permissions",
            key: "read",
            render: (_, record) => (
                <Checkbox
                    key={record.key}
                    checked={record.permissions.read}
                    onChange={(e) =>
                        handlePermissionChange(
                            record.key,
                            "read",
                            e.target.checked
                        )
                    }
                />
            ),
        },
        {
            title: (
                <Space>
                    <IconPencilMinus color="#ffc107" size={20} />
                    Edit
                </Space>
            ),
            dataIndex: "permissions",
            key: "update",
            render: (_, record) => (
                <Checkbox
                    key={record.key}
                    checked={record.permissions.update}
                    onChange={(e) =>
                        handlePermissionChange(
                            record.key,
                            "update",
                            e.target.checked
                        )
                    }
                />
            ),
        },
        {
            title: (
                <Space>
                    <IconTrash color="#dc3545" size={20} />
                    Delete
                </Space>
            ),
            dataIndex: "permissions",
            key: "delete",
            render: (_, record) => (
                <Checkbox
                    key={record.key}
                    checked={record.permissions.delete}
                    onChange={(e) =>
                        handlePermissionChange(
                            record.key,
                            "delete",
                            e.target.checked
                        )
                    }
                />
            ),
        },
    ];

    return (
        <Card>
            <Form
                layout="vertical"
                name="form-roles"
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Name"
                            name="name"
                            initialValue={formData.name}
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input
                                value={formData.name}

                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Color"
                            name="color"
                            initialValue={formData.color}
                        >
                            <ColorPicker
                                value={formData.color}
                                showText
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Divider>Select permissions</Divider>
            <Table
                dataSource={initialData?.permissions || []}
                columns={columns}
                pagination={false}
                rowKey="uuid"
            />
        </Card>
    );
};

export default FormRole;
