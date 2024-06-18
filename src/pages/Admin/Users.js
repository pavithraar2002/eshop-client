import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from "axios";


const Users = () => {
  const [ users,setUsers] = useState([]);
   //get all users
   const getUser = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/get-users");
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
            <div className="border shadow">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Address</th>
                    </tr>
                  </thead>
            {users?.map((u, i) => {
            return (
              
                  <tbody>
                    <tr>
                      <td> {i + 1} </td>
                      <td> {u?.name} </td>
                      <td> {u?.email}  </td>
                      <td> {u?.address}  </td>
                    </tr>
                  </tbody>
                
            );
          })}
          </table>
          </div>
            
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Users