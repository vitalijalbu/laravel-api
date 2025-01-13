"use client";
import { useState } from "react";
import { Avatar, Button, Dropdown, Space, Tag } from "antd";
import Link from "next/link";
import {
    IconDots,
    IconEye,
    IconPencilMinus,
    IconPlus,
    IconTrash,
} from "@tabler/icons-react";
import AppLayout from "@/layouts/app-layout";
import Datatable from "@/shared/datatable";
import { formatDate } from "@/hooks/date-formatter";
import { DrawerUser } from "@/modules/admin";
import { useDeleteOne } from "@/lib/query";

const Page = () => {
    const RESOURCE = "roles";

    const [modal, setModal] = useState(false);
    const [selected, setSelected] = useState([]);
    const { mutate, isPending: isDeletePending } = useDeleteOne();

    const toggleModal = (record = null) => {
        setSelected(record);
        setModal((prev) => !prev);
    };

    const columns = [
        {
            title: "Name",
            key: "name",
            filterable: true,
            fixed: true,
            render: (record) => (
                <Link href={`/settings/roles/${record?.id}`}>
                    <Space>
                        <Avatar
                            size="large"
                            shape="square"
                            src={record?.image || "/images/placeholder.svg"}
                        />
                        {record?.name}
                    </Space>
                </Link>
            ),
        },
        {
            title: "Tot. uses",
            filterable: true,
            fixed: true,
            key: "tot_users",
            dataIndex: "tot_users",
        },
        {
            title: "Created at",
            key: "created_at",
            type: "datetime",
            align: "right",
            width: 100,
            sorter: (a, b) => a.created_at - b.created_at,
            render: (record) => <span>{formatDate(record?.created_at)}</span>,
        },
        {
            key: "actions",
            align: "right",
            fixed: "right",
            render: (record) => {
                <Dropdown
                    menu={{ items: tableActions }}
                    placement="bottomRight"
                    trigger={["click"]}
                    onClick={() => setSelected(record)}
                >
                    <Button type="text" icon={<IconDots />} />
                </Dropdown>;
            },
        },
    ];

    const tableActions = [
        {
            key: 1,
            onClick: () => toggleModal(selected),
            icon: <IconPencilMinus size={20} />,
            label: "Edit",
        },
        {
            type: "divider",
        },
        {
            key: 3,
            danger: true,
            onClick: () => {
                if (selected) {
                    mutate({
                        resource: RESOURCE,
                        id: selected?.id,
                    });
                }
            },
            icon: <IconTrash size={20} />,
            label: "Delete",
        },
    ];

    return (
            <AppLayout
                title="Roles"
                extra={[
                    <Space>
                        <Button
                            type="primary"
                            key={1}
                            onClick={() => setModal(!modal)}
                            icon={<IconPlus />}
                        >
                            Create
                        </Button>
                    </Space>,
                ]}
            >
                <Datatable
                    resource={RESOURCE}
                    columns={columns}
                    hasExport={true}
                />
            </AppLayout>
    );
};

export default Page;
