import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss"

function AdminUsers() {
  const [userData, setUserData] = useState([]);

  async function fetchUsers() {
    const response = await fetch("http://localhost:3100/user");
    const data = await response.json();
    setUserData(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function handleDelete(id) {
    await fetch("http://localhost:3100/user/" + id, { method: "DELETE" });
    await fetchUsers();
  }

  return (
    <div className="adminUsers">
        <table>
          <thead>
            <tr>
              <th>Profile Photo</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item) => (
              <tr key={item._id}>
                <td>
                  <img className="table_img" src={item.profilePhoto} alt="" />
                </td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td className="table_icon">
                  <i
                    onClick={() => handleDelete(item._id)}
                    className="fa-regular fa-trash-can"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default AdminUsers;
