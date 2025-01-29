import { mapOperator } from "./map-operator";
import qs from "qs";

// Generate nested filter fields for dot-separated fields
export const generateNestedFilterField = (field) => {
  const fields = field.split(".");
  return fields.reduce((query, v) => `${query}[${v}]`, "");
};

// Generate a logical filter query
const generateLogicalFilter = (filter, parent = "") => {
  const { field, operator, value } = filter;
  const mappedOperator = mapOperator(operator);

  if (!field || !mappedOperator) {
    console.error("Invalid filter structure:", filter);
    return "";
  }

  const fieldQuery = `${parent}${generateNestedFilterField(
    field
  )}[$${mappedOperator}]`;

  if (Array.isArray(value)) {
    return value
      .map(
        (val, index) =>
          `filters${fieldQuery}[${index}]=${encodeURIComponent(val)}`
      )
      .join("&");
  }

  return `filters${fieldQuery}=${encodeURIComponent(value)}`;
};

// Generate a conditional filter query for `or` and `and` operators
const generateConditionalFilter = (filter, parent = "") => {
  const { operator, value } = filter;

  if (!value || !Array.isArray(value)) {
    console.error("Invalid conditional filter value:", filter);
    return "";
  }

  return value
    .map((item, index) => {
      const subParent = `${parent}[$${operator}][${index}]`;
      return item?.operator === "or" || item?.operator === "and"
        ? generateConditionalFilter(item, subParent)
        : generateLogicalFilter(item, subParent);
    })
    .join("&");
};

// Generate a complete filter query string
export const generateFilter = (filters) => {
  if (!filters || !Array.isArray(filters)) {
    console.error("Invalid filters array:", filters);
    return "";
  }

  const rawQuery = filters
    .map((filter) =>
      filter.operator === "or" || filter.operator === "and"
        ? generateConditionalFilter(filter)
        : generateLogicalFilter(filter)
    )
    .join("&");

  const parsedQuery = qs.parse(rawQuery, { depth: 15 });
  return qs.stringify(parsedQuery, { encodeValuesOnly: true });
};
