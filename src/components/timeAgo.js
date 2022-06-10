import { formatDistanceToNow, parseISO } from "date-fns";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const Iso = parseISO(timestamp);
    const date = formatDistanceToNow(Iso);
    timeAgo = `${date} ago`;
  }

  return <div>{timeAgo}</div>;
};

export default TimeAgo;
