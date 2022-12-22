import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Create from "./pages/Create";
import Project from "./pages/projects/Project";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import OnlineUsers from "./components/OnlineUsers";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route exact path="/">
                {!user && <Navigate to="/login" />}
                {user && <Dashboard />}
              </Route>
              <Route path="/create">
                {!user && <Navigate to="/login" />}
                {user && <Create />}
              </Route>
              <Route path="/projects/:id">
                {!user && <Navigate to="/login" />}
                {user && <Project />}
              </Route>
              <Route path="/login">
                {user && <Navigate to="/" />}
                {!user && <Login />}
              </Route>
              <Route path="/signup">
                {user && <Navigate to="/" />}
                {!user && <Signup />}
              </Route>
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
