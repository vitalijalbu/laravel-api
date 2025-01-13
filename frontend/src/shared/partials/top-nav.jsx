"use client";
import { useEffect, useState } from "react";
import { Avatar, Button, Divider, Dropdown, Flex, Typography } from "antd";
import Link from "next/link";
const { Text } = Typography;
import { handleLogout } from "@/lib/actions/logout";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { useAtom } from "jotai";
import { sidebarAtom } from "@/lib/store";
import {
  IconChevronDown,
  IconLogout,
  IconMenu2,
  IconUserCircle,
} from "@tabler/icons-react";



const TopNav = () => {
    const user = null;
  const breakpoints = useBreakpoint();
  const [isSidebarOpen, openSidebar] = useAtom(sidebarAtom);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const items = [
    {
      key: "profile",
      icon: <IconUserCircle className="text-primary" />,
      label: <Link href="/settings/profile">Il mio profilo</Link>,
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      danger: true,

      onClick: () => handleLogout(),
      icon: <IconLogout className="text-red" />,
      label: "Esci",
    },
  ];

  return (
    <Flex
      justify={!breakpoints.md ? "space-between" : "end"}
      align="center"
      className="h-full"
    >
      <Button
        type="text"
        className="!hidden !md:block"
        icon={<IconMenu2 />}
        onClick={() => openSidebar(!isSidebarOpen)}
      />
      <div className="float-right">
        <Dropdown
          className="min-w-full"
          trigger={["click"]}
          placement="bottomRight"
          menu={{
            items,
          }}
        >
          <div className="flex items-center cursor-pointer h-full">
            <Avatar
              shape="square"
              icon={<IconUserCircle className="text-primary" />}
            />
            <Divider type="vertical" />
            <div className="block">
              <Text className="block w-100">
                {isClient ? user?.username : "loading..."}
              </Text>
            </div>
            <IconChevronDown color="#A1A8B0" />
          </div>
        </Dropdown>
      </div>
    </Flex>
  );
};

export default TopNav;
