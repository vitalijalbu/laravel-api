"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Avatar, Button, Dropdown, Space, Tag, DatePicker } from "antd";
const { RangePicker } = DatePicker;
import Link from "next/link";
import {
    IconDots,
    IconPencilMinus,
    IconTrash,
    IconUser,
    IconUserPlus,
} from "@tabler/icons-react";
import AppLayout from "@/layouts/app-layout";
import Datatable from "@/shared/datatable";
import { formatDate } from "@/hooks/date-formatter";
import { DrawerUser } from "@/modules/admin";
import dayjs from "dayjs";
import { useDeleteOne } from "@/lib/query";
import { useExport } from "@/lib/query/use-export";

const Page = () => {
    const RESOURCE = "users";

    const [modal, setModal] = useState(false);
    const [modalGenerate, setModalGenerate] = useState(false);
    const [selected, setSelected] = useState([]);
    const [selectedIds, setSelectedIds] = useState(null);
    const [dates, setDateRange] = useState([
        dayjs().startOf("week"),
        dayjs().endOf("day"),
    ]);
    const { mutate, isPending: isDeletePending } = useDeleteOne();
    const { mutate: exportData, isPending: isPendingExport } = useExport();

    const handleExport = () => {
        const formattedDates = dates.map((date) => date.format("YYYY-MM-DD"));
        exportData({
            users: selectedIds,
            dates: formattedDates,
        });
    };

    const toggleModal = (record = null) => {
        setSelected(record);
        setModal((prev) => !prev);
    };

    const columns = [
        {
            title: "Username",
            key: "username",
            render: (record) => (
                <Link href={`/users/${record?.id}`}>
                    <Space>
                        <Avatar
                            shape="square"
                            icon={<IconUser className="text-primary" />}
                        />
                        {record?.username}
                    </Space>
                </Link>
            ),
        },
        {
            title: "Genere",
            key: "username",
            render: ({ gender }) => (
                <Tag color={gender === "male" ? "geekblue" : "volcano"}>
                    {gender === "male" ? "Maschio" : "Femmina"}
                </Tag>
            ),
        },
        {
            title: "Attivo",
            key: "blocked",
            render: ({ blocked }) => (
                <Tag color={blocked !== true ? "geekblue" : "volcano"}>
                    {blocked !== true ? "Si" : "No"}
                </Tag>
            ),
        },
        {
            title: "Data di nascita",
            key: "birthDate",
            align: "right",
            render: ({ birthDate }) => formatDate(birthDate),
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
        <>
            {modal && (
                <DrawerUser
                    isOpened={modal}
                    onClose={() => toggleModal()}
                    initialData={selected}
                    resource={RESOURCE}
                />
            )}
            <AppLayout
                title="Users"
                extra={[
                    <Space>
                        <Button
                            type="primary"
                            key={1}
                            onClick={() => setModalGenerate(!modalGenerate)}
                            icon={<IconUserPlus />}
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
                    isPendingExport={isPendingExport}
                    onExport={() => handleExport()}
                    filtersArea={
                        <RangePicker
                            disabledDate={(current) =>
                                current && current > dayjs().endOf("day")
                            }
                            defaultValue={dates}
                            format="YYYY-MM-DD"
                            onChange={(values) => setDateRange(values)}
                        />
                    }
                    onSelect={(rows) => setSelectedIds(rows)}
                />
            </AppLayout>
        </>
    );
};

export default Page;
