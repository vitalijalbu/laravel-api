"use client";
import React, { useState } from "react";
import { Button, message } from "antd";
import AppLayout from "@/layouts/app-layout";
import FormRole from "@/modules/roles/shared/form-role";
import { useDeleteOne, useGetOne } from "@/lib/query";
import { useParams } from "next/navigation";


const Page = () => {
    const RESOURCE = "roles";
    const [modal, setModal] = useState(false);
    const { id } = useParams();
    const { mutate, isPending: isDeletePending } = useDeleteOne();
    const { data, isPending, isError } = useGetOne({ resource: RESOURCE, id });

    return (
        <AppLayout
            title={`Edit role - ${data?.data?.name}`}
            backLink="/settings/roles"
            extra={
                <Button
                    type="primary"
                >
                    Save
                </Button>
            }
        >
             {JSON.stringify(data)}
            <div className="data-content">
                <FormRole initialData={data} />
            </div>
        </AppLayout>
    );
};

export default Page;