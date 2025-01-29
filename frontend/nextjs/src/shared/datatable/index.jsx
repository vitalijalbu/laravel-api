import { Suspense, useEffect, useState } from "react";
import { Table, Input, Result, Button } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { IconAlertCircle, IconChevronDown, IconChevronLeft, IconChevronRight, IconFileExport } from "@tabler/icons-react";
import debounce from "lodash.debounce";
import { useList } from "@/lib/query";

function Datatable({
  columns, resource, filtersArea = null, filters: staticFilters = [], hasExport = false, isPendingExport = false, onSelect, onExport,
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const hasSelected = selectedRowKeys.length > 0;

  const [pagination, setPagination] = useState({
    current: parseInt(searchParams.get("page")) || 1,
    pageSize: parseInt(searchParams.get("page_size")) || 25,
    total: 0,
  });
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [sorting, setSorting] = useState([{
    field: searchParams.get("order_by"),
    order: searchParams.get("sort_order") === "desc" ? "descend" : "ascend",
  }]);

  // Combine static and dynamic filters
  const dynamicFilters = searchQuery ? [{ field: "name", operator: "contains", value: searchQuery }] : [];
  const filters = [...staticFilters, ...dynamicFilters].filter(Boolean);

  // Process sorting for API
  const sorters = sorting.filter(sort => sort.field).map(sort => ({
    field: sort.field, order: sort.order === "ascend" ? "asc" : "desc",
  }));

  // Fetch data using useList hook (presumably a custom hook)
  const { data, isPending, isError, error } = useList({
    resource, pagination, filters, sorters,
  });

  useEffect(() => {
    if (data?.meta?.pagination) {
      const { total, current_page, total_pages } = data.meta.pagination;
      setPagination(prev => ({
        ...prev,
        total,
        current: current_page,
      }));
    }
  }, [data]);

  // Debounced search handler
  const handleSearch = debounce((value) => {
    setSearchQuery(value);
    setPagination(prev => ({ ...prev, current: 1 }));
    router.replace(`?${new URLSearchParams({ ...Object.fromEntries(searchParams), search: value }).toString()}`);
  }, 300);

  // Pagination change handler
  const handlePaginationChange = (page, pageSize) => {
    setPagination({ current: page, pageSize, total: pagination.total });
    router.replace(`?${new URLSearchParams({ ...Object.fromEntries(searchParams), page, page_size: pageSize }).toString()}`);
  };

  if (isError) return <Result icon={<IconAlertCircle />} title="Internal Error" subTitle={error.message} status="error" />;

  return (
    <Suspense fallback="loading...">
      <div className="mb-4 flex items-center justify-between">
        <div>{hasSelected && `Selezionat${selectedRowKeys.length === 1 ? "a" : "e"}: ${selectedRowKeys.length} rig${selectedRowKeys.length === 1 ? "a" : "he"}`}</div>
        <div className="flex items-center gap-2">
          <Input.Search placeholder="Cerca..." onChange={e => handleSearch(e.target.value)} allowClear />
          {filtersArea}
          {hasExport && <Button type="dashed" onClick={() => onExport(selectedRowKeys)} disabled={selectedRowKeys.length === 0} loading={isPendingExport} icon={<IconFileExport />} >Export</Button>}
        </div>
      </div>
      <Table
        loading={isPending}
        rowSelection={onSelect && { selectedRowKeys, onChange: (keys) => { setSelectedRowKeys(keys); onSelect(keys); } }}
        scroll={{ x: "max-content" }}
        columns={columns.map(col => ({
          ...col,
          sorter: col.sorter === true,
          sortOrder: sorting.find(sort => sort.field === col.key)?.order || null,
          sortDirections: ["ascend", "descend"],
          sortIcon: () => <IconChevronDown color="#A1A8B0" size={18} />,
        }))}
        dataSource={data?.data || []}
        rowKey="id"
        pagination={{
          position: ["bottomRight"], hideOnSinglePage: true, current: pagination.current, pageSize: pagination.pageSize, total: pagination.total,
          nextIcon: <Button type="text" icon={<IconChevronRight />} />, prevIcon: <Button type="text" icon={<IconChevronLeft />} />,
          onChange: handlePaginationChange,
        }}
      />
    </Suspense>
  );
}

export default Datatable;
