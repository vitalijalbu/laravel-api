"use client";
import React, { useState } from "react";
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
} from "antd";
const { Title } = Typography;
import { useForm } from "@inertiajs/react";
import {
    IconPencilMinus,
    IconTable,
    IconTablePlus,
    IconTrash,
} from "@tabler/icons-react";
import { getIcon } from "@/utils/icons";

const FormRole = (props) => {
    const { initialData } = props;
    const [form] = Form.useForm();
    // Initialize the form with Inertia's useForm hook
    const { data, setData, post, processing } = useForm({
        permissions: initialData,
    });

    // Handle checkbox changes
    const handlePermissionChange = (recordKey, permissionType, checked) => {
        setData("permissions", (permissions) =>
            permissions.map((item) =>
                item.key === recordKey
                    ? {
                          ...item,
                          permissions: {
                              ...item.permissions,
                              [permissionType]: checked,
                          },
                      }
                    : item
            )
        );
    };

    // Define table columns
    const columns = [
        {
            title: "Pagina",
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
                    Creazione
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
                    Lettura
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
                    Eliminazione
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

    // Gestione del submit
    const handleSubmit = () => {
        console.log("form:", data);
        post("store", {
            onSuccess: () => {
                message.success("Accesso effettuato con successo!");
            },
            onError: () => {
                message.error(
                    "Errore nei dati di accesso, controlla e riprova."
                );
            },
        });
    };

    return (
        <Card>
            <Form
                layout="vertical"
                name="form-reminder"
                form={form}
                onFinish={handleSubmit}
                disabled={processing}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Nome ruolo"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Inserisci il nome del ruolo",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Colore"
                            name="color"
                        >
                            <ColorPicker showText />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Divider>Seleziona permessi</Divider>
            <Table
                dataSource={initialData}
                columns={columns}
                pagination={false}
                key="uuid"
            />
        </Card>
    );
};

export default FormRole;