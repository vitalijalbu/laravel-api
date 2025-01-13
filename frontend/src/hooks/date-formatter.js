import dayjs from "dayjs";
import "dayjs/locale/it";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import { Tag } from "antd";

dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.locale("it");

// Default minutes duration for activities
function convertMinutesToDuration(minutes) {
  const durationObj = dayjs.duration(minutes, "minutes");

  const days = durationObj.days();
  const hours = durationObj.hours();
  const mins = durationObj.minutes();

  let durationStr = "";
  if (days) durationStr += `${days} giorn${days > 1 ? "i" : "o"}, `;
  if (hours) durationStr += `${hours} or${hours > 1 ? "e" : "a"}, `;
  if (mins) durationStr += `${mins} minut${mins > 1 ? "i" : "o"}`;

  return durationStr.trim().replace(/,\s*$/, "");
}

// Default date format
const formatTime = (time) => {
  if (!time) return "";
  return dayjs(time, "HH:mm:ss").format("HH:mm");
};

// Default date format
const formatDate = (date) => {
  if (!date) return "";
  return dayjs(date).format("YYYY-MM-DD");
};

// Default date format
const formatDateTime = (date) => {
  if (!date) return "";
  return dayjs(date).format("YYYY-MM-DD HH:mm");
};

// Custom hook to format day names from an array
const formatDays = (days) => {
  if (!days) {
    return null;
  }

  // Map 1-7 (Monday-Sunday) to dayjs-compatible 0-6 (Sunday-Saturday)
  const dayMap = {
    1: 1, // Monday
    2: 2, // Tuesday
    3: 3, // Wednesday
    4: 4, // Thursday
    5: 5, // Friday
    6: 6, // Saturday
    7: 0, // Sunday
  };

  // Set locale to Italian
  dayjs.locale("it");

  const formatDay = (day) => {
    const dayNumber = dayMap[day];
    return dayNumber !== undefined
      ? dayjs().day(dayNumber).format("dddd")
      : day;
  };

  if (Array.isArray(days)) {
    return days.map(formatDay).join(", ");
  }

  return formatDay(days);
};

const parseBoolTag = (value) => {
  if (value === 1 || value === true) {
    return <Tag color="green">Sì</Tag>;
  } else {
    return <Tag color="blue">No</Tag>;
  }
};

export {
  formatDate,
  formatTime,
  formatDateTime,
  formatDays,
  convertMinutesToDuration,
  parseBoolTag,
};