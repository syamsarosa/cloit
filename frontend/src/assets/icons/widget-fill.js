import { cn } from "../../lib/utils";

function WidgetFill({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      className={cn("fill-gray-500", className)}
    >
      <path d="M666-440 440-666l226-226 226 226-226 226Zm-546-80v-320h320v320H120Zm400 400v-320h320v320H520Zm-400 0v-320h320v320H120Z" />
    </svg>
  );
}

export default WidgetFill;