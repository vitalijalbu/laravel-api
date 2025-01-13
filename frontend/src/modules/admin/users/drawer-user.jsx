"use client";
import React, { useState } from "react";
import {
  Button,
  Drawer,
  Form,
  Input,
  Row,
  Col,
  Space,
  DatePicker,
  Radio,
} from "antd";

import { useCreate, useUpdate } from "@/lib/query";
import dayjs from "dayjs";

const DrawerUser = (props) => {
  const { isOpened, onClose, initialData, resource } = props;

  const [form] = Form.useForm();
  const [isTouched, setFormTouched] = useState(false);

  // Use create mutation if no documentId, else use update mutation
  const mutation = initialData ? useUpdate() : useCreate();

  const handleSubmit = async (values) => {
    const payload = {
      resource,
      body: {
        ...values,
        role: 1,
        email: `${values.username}@mail.com`,
      },
    };

    if (initialData) {
      payload.id = initialData?.id;
    }

    try {
      await mutation.mutateAsync(payload);
      form.resetFields();
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Drawer
      open={isOpened}
      size="large"
      className="fullwidth"
      onClose={onClose}
      title={
        initialData ? (
          <>
            User - <mark>{initialData?.username}</mark>
          </>
        ) : (
          "Create pazienti"
        )
      }
      extra={
        <Space>
          <Button type="default" onClick={onClose}>
            Annulla
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            aria-label="Save"
            form="form-user"
            loading={mutation.isPending}
            disabled={!isTouched}
          >
            Save
          </Button>
        </Space>
      }
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        name="form-user"
        disabled={mutation.isPending}
        onValuesChange={() => setFormTouched(true)}
        initialValues={{
          ...initialData,
          birthDate: initialData ? dayjs(initialData?.birthDate) : dayjs(),
        }}
      >
        <Row gutter={[8, 8]}>
          <Col md={12} sm={24} key={1}>
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: "Il campo è obbligatorio" }]}
            >
              <Input allowClear />
            </Form.Item>
          </Col>

          <Col md={12} sm={24} key={5}>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: "Il campo è obbligatorio" }]}
            >
              <Input.Password
                visibilityToggle={{
                  visible: true,
                }}
                allowClear
              />
            </Form.Item>
          </Col>

          <Col md={12} sm={24} key={5}>
            <Form.Item label="Sesso" name="gender">
              <Radio.Group>
                <Radio value="female">Femmina</Radio>
                <Radio value="male">Maschio</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col md={12} sm={24} key={5}>
            <Form.Item label="Anno di nascita" name="birthDate">
              <DatePicker  />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default DrawerUser;
