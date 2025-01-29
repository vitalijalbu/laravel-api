"use client";
import AuthLayout from "@/layouts/auth-layout";
import { loginAction } from "@/lib/api/me";
import { Button, Form, Input, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const router = useRouter();
    const [form] = Form.useForm();
    const [isPending, setLoading] = useState(false);
    const [formTouched, setFormTouched] = useState(false);

    const handleSubmit = (values) => {
        setLoading(true);
        loginAction(values)
            .then(({ res }) => {
                message.success("Accesso eseguito con successo");
                router.push("/");
            })
            .catch((error) => {
                message.error("Invalid email or password");
                setLoading(false);
            });
    };

    return (
        <AuthLayout title="Accedi">
            <Form
                layout="vertical"
                autoComplete="false"
                form={form}
                onFinish={handleSubmit}
                disabled={isPending}
                onValuesChange={() => setFormTouched(true)}
            >
                <Form.Item
                    name="identifier"
                    autoComplete="off"
                    rules={[
                        { required: true, message: "Il campo è obbligatorio" },
                    ]}
                >
                    <Input autoComplete="off" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "La password è obbligatoria",
                        },
                    ]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Button
                        htmlType="submit"
                        aria-label="Login"
                        type="primary"
                        block
                        loading={isPending}
                        disabled={isPending || !formTouched}
                    >
                        Login
                    </Button>
                </Form.Item>
            </Form>
            <div className="my-4 text-center">
                <Link href="/forgot-password">Lost password?</Link>
            </div>
        </AuthLayout>
    );
}
