"use client";
import { Avatar, Button, Dropdown } from "antd";
import Link from "next/link";
import { handleLogout } from "@/lib/actions/logout";
import Image from "next/image";
import { Icon123, IconLogout } from "@tabler/icons-react";

export function Header() {
  const items = [
    {
      key: "/settings",
      icon: <Avatar icon={<Icon123 className="text-primary" />} />,
      label: <Link href="/settings">Settings</Link>,
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      danger: true,
      onClick: () => handleLogout(),
      icon: <Avatar icon={<IconLogout className="text-red" />} />,
      label: "Esci",
    },
  ];

  return (
    <header className="container py-2">
      <div className=" flex align-center justify-between gap-4">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            width={150}
            height={50}
            loading="eager"
            alt=" Logo"
            className="m-auto"
          />
        </Link>
        <div>
          <div className="flex gap-2">
            <Link href="/reminders">
              <Button
                type="primary"
                shape="circle"
                icon={<IconClock className="text-white" />}
              />
            </Link>
            <Dropdown
              trigger={["click"]}
              placement="bottomRight"
              menu={{
                items,
              }}
            >
              <Button
                shape="circle"
                type="text"
                icon={<IconUser className="!text-white"/>}
                className="!bg-gray-800"
              />
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}
