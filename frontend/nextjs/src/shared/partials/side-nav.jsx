"use client";

import Link from "next/link";
import { Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { sidebarAtom } from "@/lib/store";
import { useAtom } from "jotai";
import {
  IconSettings,
  IconHome,
  IconStethoscope,
  IconPackage,
  IconUsers,
} from "@tabler/icons-react";
import Image from "next/image";

const SideNav = () => {
  const [isSidebarOpen, openSidebar] = useAtom(sidebarAtom);

  const router = useRouter();
  const pathname = usePathname();

  const items = [
    {
      key: "/admin",
      icon: <IconHome size={22} />,
      label: <Link href="/">Home</Link>,
    },
    {
      key: "/users",
      icon: <IconUsers size={22} />,
      label: <Link href="/users">Users</Link>,
    },    
    {
      key: "/products",
      icon: <IconPackage size={22} />,
      label: <Link href="/products">Products</Link>,
    },
    {
      type: "divider",
    },
    {
      key: "settings",
      icon: <IconSettings size={20} />,
      label: <Link href="/settings">Settings</Link>,
    },
  ];

  return (
    <aside>
      {/* <div
        className="w-fit p-2 cursor-pointer"
        onClick={() => openSidebar(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <IconChevronRight color="white" className="text-white" />
        ) : (
          <IconChevronLeft className="text-white" color="white" />
        )}
      </div> */}

      <div className="flex flex-col justify-between">
        <div className="p-4 text-center">
          <Image
            src="/images/logo.svg"
            height={30}
            width={100}
            alt=" Logo"
            className="w-auto h-[30px] mx-auto"
          />
        </div>
        <div className="my-10">
          <Menu
            mode="inline"
            inlineIndent={12}
            defaultSelectedKeys={[pathname]}
            items={items}
            activeKey={pathname}
          />
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
