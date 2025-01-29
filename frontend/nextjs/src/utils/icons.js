import { IconBuildingArch, IconInbox, IconMusic, IconUsers } from "@tabler/icons-react";

// Icons
export const iconENUM = [
  { value: "users", icon: <IconUsers color="#1677ff" size={20} /> },
  { value: "artists", icon: <IconMusic color="#1677ff" size={20} /> },
  { value: "clubs", icon: <IconBuildingArch color="#1677ff" size={20} /> },
  { value: "inbox", icon: <IconInbox color="#1677ff" size={20} /> },
];

export function getIcon(value) {
  const item = iconENUM.find((item) => item.value === value);
  return item?.icon || null; 
}