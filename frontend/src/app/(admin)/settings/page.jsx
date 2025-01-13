"use client";
import React from "react";
import { Avatar, Card, Col, Row, Typography } from "antd";
const { Meta } = Card;
const { Title, Text } = Typography;
import Link from "next/link";
import AppLayout from "@/layouts/app-layout";
import {
    IconLockAccess,
    IconTicket,
    IconUsers,
} from "@tabler/icons-react";

const Page = () => {
    
    const settingLinks = [
        {
            title: "Utenti e ruoli",
            items: [
                {
                    label: "Utenti",
                    description: "Gestisci gli utenti",
                    icon: <IconUsers />,
                    url: "/settings/users",
                },
                {
                    label: "Roles",
                    description: "Gestisci ruoli e permessi",
                    icon: <IconLockAccess />,
                    url: "/settings/roles",
                },
            ],
        },
        {
            title: "Generale",
            items: [
                {
                    label: "Tipologie eventi",
                    description: "Edit le tipologie di eventi",
                    icon: <IconTicket />,
                    url: "/settings/event-types",
                },
            ],
        },
    ];

    return (
        <AppLayout title="Settings">
            {settingLinks.map((section, i) => (
                <Row gutter={[16, 16]} key={i} className="mb-4">
                    <Col key={i} span={24}>
                        <Title level={5}>{section.title}</Title>
                    </Col>
                    {section.items.map((item, j) => (
                        <Col
                            span={4}
                            xl={6}
                            lg={6}
                            md={4}
                            sm={24}
                            xs={24}
                            key={j}
                        >
                            <Card>
                                <Link href={item.url}>
                                    <Meta
                                        avatar={
                                            <Avatar
                                                shape="square"
                                                icon={item?.icon}
                                            />
                                        }
                                        title={item.label}
                                        description={item.description}
                                    />
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ))}
        </AppLayout>
    );
};
export default Page;
