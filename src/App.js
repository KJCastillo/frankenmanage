import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Create from "./pages/Create";
import Project from "./pages/Project";

function App() {
  return <div className="App">
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/projects/:id">
            <Project />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  </div>;
}

export default App;
