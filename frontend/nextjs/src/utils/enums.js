// Inbox
export const priorityENUM = [
  { value: "low", label: "Bassa", color: "green" },
  { value: "medium", label: "Media", color: "orange" },
  { value: "high", label: "Alta", color: "red" },
  { value: "urgent", label: "Urgente", color: "red" },
];

export function getPriority(value) {
  return (
    priorityENUM.find((item) => item?.value === value) || {
      label: "Sconosciuta",
      color: "gray",
    }
  );
}