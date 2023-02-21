import { useEffect, useState } from "react";
import { useParams ,Link } from 'react-router-dom/cjs/react-router-dom';
import axios from "axios";

function User() {
let { id } = useParams();
const [user, setUser] = useState({});
const [loading, setLoading] = useState(true);

useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {setUser(res.data)})
    .finally(() => setLoading(false))
},[id]);

  return (
    <div>
        <h1>User Detail</h1>
        {loading && <div>loading</div>}
        {!loading && <code>{JSON.stringify(user)}</code>}

        <br/>
        <br/>

        <Link to={`/users/${parseInt(id) + 1}`}>
          Next User
        </Link>
    </div>
  );
}

export default User