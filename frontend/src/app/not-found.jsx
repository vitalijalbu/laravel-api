import React from "react";
import { Result, Button } from "antd";
import Link from "next/link";
import { IconAlertCircle, IconArrowLeft } from "@tabler/icons-react";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Result
        icon={
          <IconAlertCircle className="m-auto" color="rgba(0, 0, 0, 0.45)" />
        }
        title="404 Not Found"
        subTitle="Whoops! That page doesn’t exist."
      />
      <div className="mt-4 text-center">
        <Button as={Link} type="default" href="/home" icon={<IconArrowLeft />}>
          Torna alla home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
