import React from "react";
import { Modal, Button, Space } from "antd";
import { IconTrash } from "@tabler/icons-react";

const ConfirmModal = ({
  title = "Warning!",
  onClose,
  onOk,
  message = "Are you sure?",
  className = "",
  cancelText = "Cancel",
  confirmText = "Ok",
  isDelete = false,
  isDanger = false,
  icon,
  buttonsComponent,
  isPending = false,
  show = true,
}) => {
  console.log("isPending confirm", isPending);

  const handleOk = async () => {
    await onOk();
    if (!isPending) onClose(true);
  };

  let buttonsContent = (
    <Space className="flex items-center mx-auto justify-center gap-5 w-full">
      {cancelText && (
        <Button
          shape="round"
          onClick={() => onClose(false)}
          disabled={isPending}
          loading={isPending}
        >
          {cancelText}
        </Button>
      )}
      <Button
        danger={isDanger || isDelete}
        type="primary"
        shape="round"
        onClick={handleOk}
        disabled={isPending}
        loading={isPending}
        icon={(isDelete && <IconTrash color="#fff" />) || icon}
      >
        {confirmText}
      </Button>
    </Space>
  );

  if (buttonsComponent) {
    const CustomComponent = buttonsComponent;
    buttonsContent = <CustomComponent onClose={onClose} />;
  }

  return (
    <Modal
      open={show}
      centered
      transitionName="ant-modal-slide-up"
      onCancel={() => onClose(false)}
      className={`confirm-modal ${className}`}
      // title={title}
      footer={buttonsContent}
    >
      {!!message && (
        <div className="p-6 text-center">
          <h3 className={`mb-5 text-xl font-semibold`}>{title}</h3>
          <p className="mb-5 text-sm font-normal text-gray-600">{message}</p>
        </div>
      )}
    </Modal>
  );
};

export default ConfirmModal;
