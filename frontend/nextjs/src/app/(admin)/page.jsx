"use client";
import React, { useState, useEffect } from "react";
import AppLayout from "@/layouts/app-layout";
import { IconUsersGroup } from "@tabler/icons-react";
import { Card, Row, Col, Statistic } from "antd";

import Link from "next/link";
import { useGetSingular } from "@/lib/query";

export default function Admin() {
    const user = null;
  const [date, setDate] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const { data, isPending, isError } = useGetSingular({
    resource: "summary-admin",
    filters: date ? { date: date.format("YYYY-MM-DD") } : {}, 
  });
  const summary = data?.data?.summary;

  const navLinks = [
    {
      label: "Total Users",
      value: summary?.totalUsers,
      icon: <IconUsersGroup />,
      url: "/admin/users",
    },
  ];

  return (
    <AppLayout
      title={isClient ? `Hi, ${user?.username}` : null}
      isError={isError}
    >
      <Row gutter={[8, 8]}>
        {navLinks.map((item, i) => (
          <Col span={8} xl={6} lg={6} md={6} sm={8} xs={12} key={i}>
            <Card>
              <Link href={item?.url}>
                <Statistic
                  title={item?.label}
                  value={item?.value}
                  prefix={item?.icon}
                />
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </AppLayout>
  );
}
