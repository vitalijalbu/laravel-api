"use client";

import { Button, Form, Input } from "antd";
import AuthLayout from "@/layouts/auth-layout";

const ResetPasswordPage = () => {
  const [form] = Form.useForm();

  return (
    <AuthLayout title="Resetta password">
      <Form layout="vertical" form={form}>
        <Form.Item
          name="newPassword"
          label="Nuova Password"
          rules={[{ required: true, message: "Il campo è obbligatorio" }]}
        >
          <Input.Password
            placeholder="Inserisci Password"
            allowClear
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Conferma Password"
          rules={[{ required: true, message: "Il campo è obbligatorio" }]}
        >
          <Input.Password
            placeholder="Conferma password"
            allowClear
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" aria-label="Save" type="primary" block>
            Save
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
};

export default ResetPasswordPage;
