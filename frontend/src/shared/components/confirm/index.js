import React from "react";
import { createRoot } from "react-dom/client";
import ConfirmModal from "./confirm-modal";
import { ConfigProvider } from "antd";
import theme from "@/assets/theme.json";

const confirm = (props) => {
  return new Promise((resolve) => {
    let el = document.createElement("div");
    const root = createRoot(el);
    const handleResolve = (result) => {
      root.unmount(); // Unmount the component
      el = null;
      resolve(result);
    };
    root.render(
      <ConfigProvider theme={theme}>
        <ConfirmModal {...props} onClose={handleResolve} />
      </ConfigProvider>
    );
  });
};

export default confirm;
