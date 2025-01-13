"use client";
import React, { useState } from "react";
import {
  Button,
  Row,
  Col,
  DatePicker,
  Space,
  Dropdown,
  Tabs,
  Flex,
  Skeleton,
} from "antd";
import {
  IconDots,
  IconFileExport,
  IconPencilMinus,
  IconTrash,
} from "@tabler/icons-react";
import AppLayout from "@/layouts/app-layout";
import { useParams } from "next/navigation";
import { useDeleteOne, useGetOne, useList } from "@/lib/query";
import {
  DrawerUser,
} from "@/modules/admin";
import dayjs from "dayjs";
import { useExport } from "@/lib/query/use-export";

const { RangePicker } = DatePicker;

export default function Page() {
  const RESOURCE = "users";
  const [RESOURCE_TAB, setTabResource] = useState("reminders");
  const [modal, setModal] = useState(false);
  const [dates, setDateRange] = useState([
    dayjs().startOf("week"),
    dayjs().endOf("day"),
  ]);
  const { id } = useParams();
  const { mutate, isPending: isDeletePending } = useDeleteOne();
  const { data, isPending, isError } = useGetOne({ resource: RESOURCE, id });
  const { mutate: exportData, isPending: isPendingExport } = useExport();

  const handleExport = () => {
    const formattedDates = dates.map(date => date.format("YYYY-MM-DD"));
    exportData({
      users: [id],
      dates: formattedDates,
    });
  };

  const {
    data: itemsData,
    isPending: isPendingData,
    isError: isErrorData,
  } = useList({
    resource: RESOURCE_TAB,
    filters: [
      {
        field: "user",
        operator: "eq",
        value: id ?? null,
      },
      {
        field: "createdAt",
        operator: "gte",
        value: dates[0].startOf("day").format("YYYY-MM-DDTHH:mm:ssZ[Z]"),
      },
      {
        field: "createdAt",
        operator: "lte",
        value: dates[1].endOf("day").format("YYYY-MM-DDTHH:mm:ssZ[Z]"),
      },
    ],
    meta: {
      populate: "*",
    },
  });

  const tableActions = [
    {
      key: 0,
      icon: <IconPencilMinus size={20} />,
      onClick: () => setModal(!modal),
      label: "Edit",
    },
    {
      type: "divider",
    },
    {
      key: 2,
      danger: true,
      icon: <IconTrash size={20} />,
      label: "Delete",
      onClick: () => {
        if (id) {
          mutate({
            resource: RESOURCE,
            id: id,
          });
        }
      },
    },
  ];

  const onDateRangeChange = (selectedDates) => {
    setDateRange(selectedDates);
  };



  return (
    <>
      {modal && (
        <DrawerUser
          initialData={data?.data}
          isOpened={modal}
          onClose={() => setModal(!modal)}
          resource={RESOURCE}
        />
      )}
      <AppLayout
        backUrl="/admin/users"
        title={
          <>
             User - <mark>{data?.data?.username}</mark>
          </>
        }
        extra={
          <Space>
            <Dropdown
              menu={{ items: tableActions }}
              placement="bottomRight"
              trigger={["click"]}
            >
              <Button icon={<IconDots />}>Altro</Button>
            </Dropdown>
          </Space>
        }
      >
        <div className="page-content">
          <Row gutter={[8, 8]} className="mb-4">
            {JSON.stringify(data)}
          </Row>
        
        </div>
      </AppLayout>
    </>
  );
}
