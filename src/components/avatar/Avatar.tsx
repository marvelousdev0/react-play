import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Avatar.css";

export default function Avatar() {
  return (
    <div className="Avatar-container">
      <FontAwesomeIcon icon={faUser} className="Avatar-logo" />
    </div>
  );
}
