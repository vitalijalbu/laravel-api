"use client";
import { Button } from "antd";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDevice } from "@/utils/breakpoints";
import { IconChevronLeft } from "@tabler/icons-react";

const AuthLayout = (props) => {
  const { children, title, subtitle, backLink } = props;
  const { isMobile } = useDevice();

  return (
    <div className="w-full relative">
      <div className="container">
        <div className="h-lvh max-w-sm m-auto justify-center flex items-center">
          <div className="w-full align-middle">
            <div className="w-full mb-10">
              <Image
                src="/images/logo.svg"
                width={225}
                height={50}
                loading="eager"
                alt="Logo"
                className="mx-auto block"
              />
            </div>
            <div className="w-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;