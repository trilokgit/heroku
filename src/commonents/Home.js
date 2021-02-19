import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
const Home = () => {
    let history = useHistory();
    const [users, setusers] = useState([]);

    useEffect(() => {
        loadusers();
    }, []);

    const loadusers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setusers(result.data.reverse());
    };
    const deleteUser = async (id) => {
        alert("Are You Want To Delete Data?");
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadusers();
        history.push("/");
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Users</h1>
                <table class="table" border shadow>
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nmae</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/users/view/${user.id}`} class ="btn btn-primary mr-2">View</Link>
                                        <Link to={`/users/edit/${user.id}`} class ="btn btn-outline-primary mr-2">Edit</Link>
                                        <Link to={`/users/edit/${user.id}`} onClick={()=>deleteUser(user.id)} class ="btn btn-danger">Delete</Link>
                                    </td>
                                    </tr>
                            ))
                        }
    </tbody>
</table>
            </div>
        </div>
    )
}
export default Home