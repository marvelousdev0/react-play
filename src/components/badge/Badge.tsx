import clsx from "clsx";
import { USER_STATUS } from "../../constants/user";
import "./Badge.css";

export default function Badge({
  status = USER_STATUS.DEFAULT,
  children,
}: {
  status?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="Badge-container">
      {children}
      <span
        className={clsx(
          "Badge-circle",
          {
            "Badge-available": status === USER_STATUS.AVAILABLE,
          },
          {
            "Badge-away": status === USER_STATUS.AWAY,
          },
          {
            "Badge-busy": status === USER_STATUS.BUSY,
          }
        )}
      />
    </div>
  );
}
