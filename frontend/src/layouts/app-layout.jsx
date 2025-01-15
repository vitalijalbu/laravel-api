import React, { useState } from "react";
import { Layout } from "antd";
const { Sider, Content } = Layout;
import SideNav from "@/shared/partials/side-nav";
import PageActions from "@/shared/components/page-actions";

export default function AppLayout(props) {
    const { title, children } = props;
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <Layout hasSider className="main-layout">
                <Sider
                    collapsible
                    trigger={null}
                    collapsed={collapsed}
                    onCollapse={onCollapse}
                    width={240}
                    collapsedWidth={window.innerWidth < 768 ? 0 : 60}
                    theme="light"
                    style={{
                        overflow: "auto",
                        position: "fixed",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        borderRight: "1px solid rgb(0 0 0 / 15%)",
                    }}
                >
                    <SideNav onCollapse={onCollapse} collapsed={collapsed} />
                </Sider>
                <Layout
                    style={{
                        padding: "10px 0",
                        marginLeft: collapsed ? 60 : 240,
                    }}
                >
                    <Content theme="light" style={{ height: "100vh" }}>
                        <div className="container">
                            <PageActions {...props} />
                            {children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    );
}
