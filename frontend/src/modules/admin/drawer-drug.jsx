import React, { useState, useEffect } from "react";
import { Drawer, Form, Button, Col, Row, Input, Space, Flex } from "antd";
import { useCreate, useUpdate } from "@/lib/query";
const { TextArea } = Input;

const DrawerDrug = (props) => {
  const { isOpened, onClose, initialData, resource } = props;
  console.log("initialData", initialData);
  const [form] = Form.useForm();
  const [formTouched, setFormTouched] = useState(false);
  const mutation = initialData ? useUpdate() : useCreate();

  const handleSubmit = async (values) => {
    const payload = {
      resource,
      body: { ...values },
    };

    if (initialData) {
      payload.id = initialData?.documentId;
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
      title={initialData ? "Edit Farmaco" : "Aggiungi Farmaco"}
      onClose={onClose}
      open={isOpened}
      size="large"
      extra={
        <Flex gap={12}>
          <Button onClick={onClose}>Chiudi</Button>
          <Button
            key="submit"
            type="primary"
            block
            htmlType="submit"
            aria-label="Save"
            form="form-drug"
            loading={mutation.isPending}
            disabled={!formTouched || mutation.isPending}
          >
            Save
          </Button>
        </Flex>
      }
    >
      <Form
        layout="vertical"
        name="form-drug"
        form={form}
        onFinish={handleSubmit}
        disabled={mutation.isPending}
        onValuesChange={() => setFormTouched(true)}
        initialValues={initialData}
      >
        <Form.Item
          name="registered_name"
          label="Nome Farmaco"
          rules={[{ required: true, message: "Il campo è obbligatorio" }]}
        >
          <Input placeholder="Inserisci nome farmaco" />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default DrawerDrug;
