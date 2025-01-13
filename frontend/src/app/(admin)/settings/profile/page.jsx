"use client";
import React, { useState, useEffect } from "react";
import { FormProfile } from "@/modules/admin";
import AppLayout from "@/layouts/app-layout";

import { useGetOne } from "@/lib/query";

const Page = (props) => {
  const RESOURCE = "users";
    const user = null;
  const { data, isPending, isError } = user?.id
    ? useGetOne({ resource: RESOURCE, id: user?.id })
    : { data: null, isPending: false, isError: false };

  return (
    <AppLayout
      backUrl="/admin/settings"
      title="Il mio profilo"
      isError={isError}
      isPending={isPending}
    >
      <FormProfile resource={RESOURCE} initialData={data?.data} />
    </AppLayout>
  );
};

export default Page;
