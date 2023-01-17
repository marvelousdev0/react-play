import "./App.css";
import Badge from "./components/badge/Badge";
import Avatar from "./components/avatar/Avatar";

export default function App() {
  return (
    <div className="App">
      <main className="App-content">
        <p>Avatar with badge</p>
        <Badge>
          <Avatar />
        </Badge>
      </main>
    </div>
  );
}
