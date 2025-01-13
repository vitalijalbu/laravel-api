import React from "react";
import { Row, Col, Button, Space, Typography, Divider, Flex } from "antd";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
const { Text, Title } = Typography;

const PageActions = (props) => {
    const { backLink, subTitle, title, extra } = props;
    return (
        <div className="page-heading mb-1">
            <Flex align="middle" justify="space-between">
                <div>
                    <Space align="start">
                        {backLink && (
                            <Link href={backLink}>
                                <Button
                                    icon={<IconChevronLeft />}
                                />
                            </Link>
                        )}
                        <div>
                            <Title level={3} className="mt-0">{title}</Title>
                            {subTitle && (
                                <div>
                                    <Text type="secondary">
                                        {subTitle}
                                    </Text>
                                </div>
                            )}
                        </div>
                    </Space>
                </div>
                <div
                    style={{ textAlign: "right" }}
                >
                    {extra}
                </div>
            </Flex>
            <Divider />
        </div>
    );
};

export default PageActions;
