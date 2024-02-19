import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function AdminBlog() {
  const [adminBlog, setAdminBlog] = useState([]);

  function getFetchBlogs() {
    fetch("http://localhost:3100/blog")
      .then((res) => res.json())
      .then((data) => setAdminBlog(data));
  }
  useEffect(() => {
    getFetchBlogs();
  }, []);

  async function deleteBlog(id) {
    await fetch("http://localhost:3100/blog/" + id, {
      method: "DELETE",
    });
    await getFetchBlogs();
  }
  return (
    <div className="adminBlog">
      <div className="adminBlog_btn">
        <Link to={"/admin/addblog"}>
          <button>
            <i className="fa-solid fa-plus"></i> Add Blog
          </button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Desc</th>
            <th>Image1</th>
            <th>Image2</th>
            <th>Image3</th>
            <th>Image4</th>
            <th>Image5</th>
            <th>Sub1</th>
            <th>Sub2</th>
            <th>Sub3</th>
            <th>Sub4</th>
            <th>Sub5</th>
            <th>Name1</th>
            <th>Name2</th>
            <th>Name3</th>
            <th>Name4</th>
            <th>Name5</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {adminBlog.map((x) => (
            <tr>
              <td>
                <div className="table_img">
                  <img src={x.thumbnail} alt="" />
                </div>
              </td>
              <td>{x.title}</td>
              <td>{x.desc.slice(0, 30)}...</td>
              <td>
                <div className="table_img">
                  <img src={x.image1} alt="" />
                </div>
              </td>
              <td>
                <div className="table_img">
                  <img src={x.image2} alt="" />
                </div>
              </td>
              <td>
                <div className="table_img">
                  <img src={x.image3} alt="" />
                </div>
              </td>
              <td>
                <div className="table_img">
                  <img src={x.image4} alt="" />
                </div>
              </td>
              <td>
                <div className="table_img">
                  <img src={x.image5} alt="" />
                </div>
              </td>
              <td>{x.sub1.slice(0, 30)}...</td>
              <td>{x.sub2.slice(0, 30)}...</td>
              <td>{x.sub3.slice(0, 30)}...</td>
              <td>{x.sub4.slice(0, 30)}...</td>
              <td>{x.sub5.slice(0, 30)}...</td>
              <td>{x.name1}</td>
              <td>{x.name2}</td>
              <td>{x.name3}</td>
              <td>{x.name4}</td>
              <td>{x.name5}</td>
              <td className="table_icon">
              <Link to={"/admin/updateblog/"+x._id}><i className="fa-regular fa-pen-to-square"></i></Link>
                <i onClick={() => deleteBlog(x._id)} className="fa-regular fa-trash-can"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminBlog;
