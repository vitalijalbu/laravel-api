"use client";
import { useState } from "react";
import { Avatar, Button, Space, Tag } from "antd";
import Link from "next/link";
import {
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
  const RESOURCE = "products";

  const [modal, setModal] = useState(false);
  const [modalGenerate, setModalGenerate] = useState(false);
  const [selected, setSelected] = useState([]);
  const { mutate, isPending: isDeletePending } = useDeleteOne();


  const toggleModal = (record = null) => {
    setSelected(record);
    setModal((prev) => !prev);
  };

  const columns = [
    {
        title: "Nome",
        key: "name",
        filterable: true,
        fixed: true,
        render: (record) => (
            <Link href={`/products/${record?.id}`}>
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
        title: "Rif. articolo",
        filterable: true,
        fixed: true,
        key: "ref",
        dataIndex: "ref",
    }, 
    {
        title: "SKU",
        key: "sku",
        dataIndex: "sku",
        filterable: true,
    },
    {
        title: "Stock",
        key: "stock_quantity",
        filterable: true,
        type: "number",
        dataIndex: "stock_quantity",
    },

    {
        title: "Materiale",
        filterable: true,
        fixed: true,
        key: "material",
        dataIndex: "material",
    },
    {
        title: "Fornitore",
        filterable: true,
        key: "supplier.name",
        render: (record) => (
            <Link href={`/suppliers`}>
                <Space>
                    <Avatar src={`/images/${record?.supplier?.logo}`} />
                    {record?.supplier?.name}
                </Space>
            </Link>
        ),
    },
    {
        title: "Categoria",
        key: "category",
        dataIndex: "category",
        filterable: true,
    },
    {
        title: "Prezzi",
        type: "number",
        filterable: true,
        sorter: true,
        dataIndex: "pricings",
        key: "pricings",
    },
    {
        title: "Caricato",
        type: "bool",
        render: ({uploaded}) => <Tag color={uploaded ? "green" : "blue"}>{uploaded ? "Si" : "No"}</Tag>,
    },
    {
        title: "Woo. ID",
        width: 100,
        filterable: true,
        type: "number",
        key: "woocommerce_id",
        render: ({woocommerce_id}) => <a href={`https://wp-magica.test/wp-admin/post.php?post=${woocommerce_id}&action=edit`} target="_blank">{woocommerce_id}</a>,
    },
    {
        title: "Creato il",
        key: "created_at",
        type: "datetime",
        align: "right",
        width: 100,
        sorter: (a, b) => a.created_at - b.created_at,
        render: (record) => (
            <span>{formatDate(record?.created_at)}</span>
        ),
    },
    {
        title: "Azioni",
        key: "actions",
        align: "right",
        render: (record) => (
            <Space.Compact>
                <Button
                    as={Link}
                    href={`/products/${record?.id}`}
                    icon={<IconEye />}
                />
                <Button
                    type="primary"
                    icon={<IconPencilMinus />}
                    onClick={() => togglePopup(record)}
                />
            </Space.Compact>
        ),
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
        title="Products"
        extra={[
          <Space>
            <Button
              type="primary"
              key={1}
              onClick={() => setModalGenerate(!modalGenerate)}
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
    </>
  );
};

export default Page;
