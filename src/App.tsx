import "./App.css";
import Avatar from "./components/avatar/Avatar";
import Badge from "./components/badge/Badge";
import { USER_STATUS } from "./constants/user";

export default function App() {
  const userStatus = USER_STATUS.DEFAULT;

  return (
    <div className="App">
      <main className="App-content">
        <p>Avatar with badge</p>
        <Badge status={userStatus}>
          <Avatar status={userStatus} />
        </Badge>
      </main>
    </div>
  );
}
