"use client";

import { Button, Form, Input } from "antd";
import AuthLayout from "@/layouts/auth-layout";
import Link from "next/link";

const ResetPasswordPage = () => {
    const [form] = Form.useForm();

    return (
        <AuthLayout title="Resetta password">
            <Form layout="vertical" form={form}>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true }]}
                >
                    <Input allowClear />
                </Form.Item>
                <Form.Item>
                    <Button
                        htmlType="submit"
                        aria-label="Save"
                        type="primary"
                        block
                    >
                        Send
                    </Button>
                </Form.Item>
            </Form>
            <div className="my-4 text-center">
                <Link href="/login">Back to login</Link>
            </div>
        </AuthLayout>
    );
};

export default ResetPasswordPage;
