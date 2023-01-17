import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { USER_STATUS } from "../../constants/user";
import "./Avatar.css";

export default function Avatar({
  status = USER_STATUS.DEFAULT,
}: {
  status?: string;
}) {
  return (
    <div
      className={clsx(
        "Avatar-container",
        {
          "Avatar-container-available": status === USER_STATUS.AVAILABLE,
        },
        {
          "Avatar-container-away": status === USER_STATUS.AWAY,
        },
        {
          "Avatar-container-busy": status === USER_STATUS.BUSY,
        }
      )}
    >
      <FontAwesomeIcon icon={faUser} className="Avatar-logo" />
    </div>
  );
}
