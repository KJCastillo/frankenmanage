import "./Navbar.css";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import Cartoon from "../assets/cartoon.svg";

export default function Navbar() {
  const { user } = useAuthContext();
  const { logout, isPending } = useLogout();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Cartoon} alt="dogo logo" />
          <span>Frankenmanage</span>
        </li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <li>
            {!isPending && (
              <button className="btn" onClick={logout}>
                Logout
              </button>
            )}
            {isPending && (
              <button className="btn" disabled>
                Logging out
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}
