export const mapOperator = (operator) => {
  switch (operator) {
    case "eq": // Equal
      return "eq";
    case "ne": // Not Equal
      return "ne";
    case "lt": // Less Than
      return "lt";
    case "lte": // Less Than or Equal
      return "lte";
    case "gt": // Greater Than
      return "gt";
    case "gte": // Greater Than or Equal
      return "gte";
    case "contains": // Case-insensitive Contains
      return "containsi";
    case "containss": // Case-sensitive Contains
      return "contains";
    case "ncontains": // Not Case-insensitive Contains
      return "notContainsi";
    case "ncontainss": // Not Case-sensitive Contains
      return "notContains";
    case "startswith": // Starts With
      return "startsWith";
    case "endswith": // Ends With
      return "endsWith";
    case "in": // Included In
      return "in";
    case "nin": // Not Included In
      return "notIn";
    case "null": // Is Null
      return "null";
    case "nnull": // Is Not Null
      return "notNull";
    case "between": // Between Range
      return "between";
    case "nbetween": // Not Between Range
      return "notBetween";
    case "or": // Logical OR
      return "or";
    case "and": // Logical AND
      return "and";
    default: // Default: Return the input if no match
      return operator;
  }
};
