import './App.css';
import * as React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import Error404 from "./components/Error404";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    
     <Router>
      <div>
        <nav>
          <ul>
            <li>
               <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="active">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
