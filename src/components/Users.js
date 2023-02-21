import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch, useRouteMatch, NavLink } from "react-router-dom/cjs/react-router-dom";
import User from "./User";

function Users() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);

let { path, url } = useRouteMatch();

useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then((res) => {setUsers(res.data)})
    .finally(() => setLoading(false))
}, []);

  return (
    <div>
      <h1>Users</h1>
      <h3>Please select User</h3>
      {loading && <div>loading</div>}
      <ul>
        {
          users.map((user) => (
            <li key={user.id}>
              <NavLink to={`${url}/${user.id}`} activeClassName="active">{user.name}</NavLink>
            </li>
          ))
        }
        </ul>

        <Switch>
          <Route exact path={path}>
          </Route>
          <Route path={`${path}/:id`} component={User} />
        </Switch>

    </div>
  )
}

export default Users