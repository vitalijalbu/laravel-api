"use client";
import React, { useState } from "react";
import { Button, Form, Input, Row, Col, Flex, Space } from "antd";
import { useUpdate } from "@/lib/query";

const FormProfile = (props) => {
  const { isOpened, onClose, initialData, resource } = props;
  const [form] = Form.useForm();
  const [formTouched, setFormTouched] = useState(false);

  // Use create mutation if no documentId, else use update mutation
  const mutation = useUpdate();

  const handleSubmit = async (values) => {
    const payload = {
      resource,
      body: { ...values },
      id: initialData.id,
    };

    try {
      await mutation.mutateAsync(payload);
      form.resetFields();
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      name="form-user"
      disabled={mutation.isPending}
      onValuesChange={() => setFormTouched(true)}
      initialValues={initialData}
    >
      <Row gutter={[8, 8]}>
        <Col span={12} key={0}>
          <Form.Item name="username" label="Username">
            <Input allowClear />
          </Form.Item>
        </Col>

        <Col span={12} key={1}>
          <Form.Item
            name="email"
            label="Email"
            type="email"
            rules={[
              { required: true, message: "Il campo è obbligatorio" },
              { type: "email", message: "Invalid email address" },
            ]}
          >
            <Input allowClear autoComplete="off" />
          </Form.Item>
        </Col>
        <Col span={12} key={2}>
          <Form.Item name="password" label="Password">
            <Input.Password autoComplete="off" allowClear />
          </Form.Item>
        </Col>
        <Col span={12} key={3}>
          <Form.Item name="confirm_password" label="Conferma password">
            <Input.Password autoComplete="off" allowClear />
          </Form.Item>
        </Col>
      </Row>
      <Space>
        <Button type="default" onClick={onClose}>
          Chiudi
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          aria-label="Save"
          form="form-user"
          loading={mutation.isPending}
          disabled={!formTouched || mutation.isPending}
        >
          Save
        </Button>
      </Space>
    </Form>
  );
};

export default FormProfile;
