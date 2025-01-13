import { Suspense, useEffect, useState } from "react";
import { Table, Input, Result, Space, div, Button } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import {
  IconAlertCircle,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconFileExport,
} from "@tabler/icons-react";
import debounce from "lodash.debounce";
import { useList } from "@/lib/query";

function Datatable(props) {
  const {
    columns,
    resource,
    meta,
    hasExport = false,
    filtersArea = null,
    filters: staticFilters = [],
    isPendingExport = false,
    onSelect,
    onExport,
  } = props; // Accept static filters as a prop

  console.log('props', props);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const hasSelected = selectedRowKeys.length > 0;

  const pageParams = parseInt(searchParams.get("page")) || 1;
  const pageSizeParams = parseInt(searchParams.get("page_size")) || 25;
  const order_by = searchParams.get("order_by");
  const sort_order = searchParams.get("sort_order");

  // State for pagination and search query
  const [pagination, setPagination] = useState({
    current: pageParams,
    pageSize: pageSizeParams,
    total: 0,
  });
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );

  const [sorting, setSorting] = useState([
    {
      field: order_by || null,
      order: sort_order === "desc" ? "descend" : "ascend",
    },
  ]);

  // Combine dynamic filters (from search) with static filters
  const dynamicFilters = searchQuery
    ? [
        {
          field: "title",
          operator: "contains",
          value: searchQuery,
        },
      ]
    : [];

  const filters = [...staticFilters, ...dynamicFilters];

  const sorters = sorting
    .filter((sort) => sort.field)
    .map((sort) => ({
      field: sort.field,
      order: sort.order === "ascend" ? "asc" : "desc",
    }));

  const { data, isPending, isError, error } = useList({
    resource,
    pagination: {
      current: pagination.current,
      pageSize: pagination.pageSize,
    },
    filters,
    sorters,
  });

  console.log('datatable', data);

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      total: data?.meta?.pagination?.total || 0,
    }));
  }, [data]);

  // Handle search input with debounce
  const handleSearch = debounce((value) => {
    setSearchQuery(value);
    setPagination({ ...pagination, current: 1 }); // Reset to first page on new search
    const newParams = new URLSearchParams(searchParams);
    newParams.set("search", value);
    router.replace(`?${newParams.toString()}`);
  }, 300);

  if (isError)
    return (
      <Result
        icon={
          <IconAlertCircle className="m-auto" color="rgba(0, 0, 0, 0.45)" />
        }
        title="Internal Error"
        subTitle={error.message}
        status="error"
      />
    );

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
    onSelect(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Suspense fallback={"loading..."}>
      <div className="mb-4 justify-between flex items-center">
        <div>
          {hasSelected
            ? `Selezionat${selectedRowKeys.length === 1 ? "a" : "e"}: ${
                selectedRowKeys.length
              } rig${selectedRowKeys.length === 1 ? "a" : "he"}`
            : null}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Input.Search
              placeholder="Cerca..."
              onChange={(e) => handleSearch(e.target.value)}
              allowClear
            />
            {filtersArea}
            {hasExport && (
              <Button
                type="dashed"
                key={2}
                onClick={() => onExport(selectedRowKeys)}
                disabled={selectedRowKeys.length <= 0}
                loading={isPendingExport}
                icon={<IconFileExport className="text-primary" />}
              >
                Export
              </Button>
            )}
          </div>
        </div>
      </div>
      <Table
        loading={isPending}
        rowSelection={onSelect ? rowSelection : null}
        scroll={{ x: "max-content" }}
        columns={columns.map((col) => ({
          ...col,
          sorter: col.sorter === true,
          sortOrder:
            sorting.find((sort) => sort.field === col.key)?.order || null,
          sortDirections: ["ascend", "descend"],
          sortIcon: ({ sortOrder }) => (
            <IconChevronDown color="#A1A8B0" size={18} />
          ),
        }))}
        dataSource={data?.data || []}
        rowKey={(record) => record.id}
        pagination={{
          position: ["bottomRight"],
          hideOnSinglePage: true,
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: pagination.total,
          nextIcon: (
            <Button type="text" icon={<IconChevronRight color="#555" />} />
          ),
          prevIcon: (
            <Button type="text" icon={<IconChevronLeft color="#555" />} />
          ),
          onChange: (page, pageSize) => {
            setPagination({ ...pagination, current: page, pageSize });
            const newParams = new URLSearchParams(searchParams);
            newParams.set("page", page);
            newParams.set("page_size", pageSize);
            router.replace(`?${newParams.toString()}`);
          },
        }}
      />
    </Suspense>
  );
}

export default Datatable;