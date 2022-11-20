import "./OnlineUsers.css";
import Avatar from "../components/Avatar";
import { useCollection } from "../hooks/useCollection";

export default function OnlineUsers() {
  const { error, documents } = useCollection("users");

  return (
    <div className="user-list">
      <h2>All Users</h2>
      {error && <div className="error">{error}</div>}
      {documents &&
        documents.map((user) => (
          <div className="user-list-item" key={user.id}>
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}