import qs from "qs";
import { generateFilter, generateSort, transformHttpError } from "@/utils/";
import { apiClient } from "../api";
import { downloadFile } from "@/hooks/download";

// Get all
export const getList = async ({
  resource,
  pagination,
  filters,
  sorters,
  meta,
}) => {
  
  const fields = meta?.fields;
  const populate = meta?.populate;


  const querySorters = generateSort(sorters);
  const queryFilters = generateFilter(filters);

  const query = {

    fields,
    populate,
    sort: querySorters.length > 0 ? querySorters.join(",") : undefined,
  };

  const { data } = await apiClient.get(
    `${resource}?${qs.stringify(query, {
      encodeValuesOnly: true,
    })}&${queryFilters}`
  );

  return data;
};

// Get many
export const getMany = async ({ resource, ids, meta }) => {
  
  const fields = meta?.fields;
  const populate = meta?.populate;
  const publicationState = meta?.publicationState;

  const queryFilters = generateFilter([
    {
      field: "id",
      operator: "in",
      value: ids,
    },
  ]);

  const query = {
    fields,
    populate,
    publicationState,
    "pagination[pageSize]": ids.length,
  };

  const { data } = await apiClient.get(
    `${resource}?${qs.stringify(query, {
      encodeValuesOnly: true,
    })}&${queryFilters}`
  );

  return data;
};

// Create
export const create = async ({ resource, body }) => {
  let dataBody = { data: body };
  if (resource === "users") {
    dataBody = body;
  }

  try {
    const { data } = await apiClient.post(`${resource}`, dataBody);
    return { data, resource };
  } catch (error) {
    throw transformHttpError(error);
  }
};

// Update
export const update = async ({ resource, id, body }) => {
  let dataBody = { data: body };
  if (resource === "users") {
    dataBody = body;
  }

  try {
    const { data } = await apiClient.put(`${resource}/${id}`, dataBody);
    return { data, resource };
  } catch (error) {
    throw transformHttpError(error);
  }
};

// Update many
export const updateMany = async ({ resource, ids, body }) => {
  const errors = [];

  const response = await Promise.all(
    ids.map(async (id) => {
      let dataBody = { data: body };
      if (resource === "users") {
        dataBody = body;
      }

      try {
        const { data } = await apiClient.put(`${resource}/${id}`, dataBody);
        return data;
      } catch (error) {
        errors.push(transformHttpError(error));
      }
    })
  );

  if (errors.length > 0) {
    throw errors;
  }

  return { data: response };
};

// Create many
export const createMany = async ({ resource, body }) => {
  const errors = [];

  const response = await Promise.all(
    body.map(async (body) => {
      try {
        const { data } = await apiClient.post(`${resource}`, body);
        return data;
      } catch (error) {
        errors.push(transformHttpError(error)); // Collect errors but continue processing
      }
    })
  );

  if (errors.length > 0) {
    throw errors;
  }

  return { data: response, resource };
};

// Get one
export const getOne = async ({ resource, id, meta }) => {
  
  const fields = meta?.fields;
  const populate = meta?.populate;
  const publicationState = meta?.publicationState;

  const query = {
    fields,
    populate,
    publicationState,
  };

  const { data } = await apiClient.get(
    `${resource}/${id}?${qs.stringify(query, {
      encode: false,
    })}`
  );

  return { data, resource, id };
};

// Get singular
export const getSingular = async ({ resource, populate, filters }) => {
  const query = {
    populate,
    ...filters,
  };

  const { data } = await apiClient.get(
    `${resource}?${qs.stringify(query, {
      encodeValuesOnly: true, // Ensure only values are encoded
    })}`
  );

  return { data, resource };
};

// Export data
export const exportData = async (filters) => {
  try {
    const response = await apiClient.get(
      `export?${qs.stringify(filters, { encodeValuesOnly: true })}`,
      { responseType: "json" }
    );

    if (response.data?.success) {
      let fileUrl = response.data.url; // Getting the URL from the response

      // Construct the full URL
      const downloadUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}${fileUrl}`;

      console.log('downloadUrl', downloadUrl);

      // Extract filename from the URL
      const filename = fileUrl.split("/").pop();

      // Trigger file download
      downloadFile(downloadUrl, filename);

      return response.data;
    } else {
      console.error("Export failed:", response.data.message);
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error exporting data:", error);
    throw error;
  }
};

// Delete one
export const deleteOne = async ({ resource, id }) => {
  const { data } = await apiClient.delete(`${resource}/${id}`);
  return { data, resource, id };
};

// Delete many
export const deleteMany = async ({ resource, ids }) => {
  const response = await Promise.all(
    ids.map(async (id) => {
      const { data } = await apiClient.delete(`${resource}/${id}`);
      return data;
    })
  );
  return { data, resource, id };
};

export const custom = async ({
  url,
  method,
  filters,
  sorters,
  payload,
  query,
  headers,
}) => {
  let requestUrl = `${url}?`;

  if (sorters) {
    const sortQuery = generateSort(sorters);
    if (sortQuery.length > 0) {
      requestUrl = `${requestUrl}&${qs.stringify({
        sort: sortQuery.join(","),
      })}`;
    }
  }

  if (filters) {
    const filterQuery = generateFilter(filters);
    requestUrl = `${requestUrl}&${filterQuery}`;
  }

  if (query) {
    requestUrl = `${requestUrl}&${qs.stringify(query)}`;
  }

  let axiosResponse;
  switch (method) {
    case "put":
    case "post":
    case "patch":
      axiosResponse = await apiClient[method](url, payload, {
        headers,
      });
      break;
    case "delete":
      axiosResponse = await apiClient.delete(url, {
        data: payload,
        headers,
      });
      break;
    default:
      axiosResponse = await apiClient.get(requestUrl, { headers });
      break;
  }

  const { data } = axiosResponse;

  return { data };
};
