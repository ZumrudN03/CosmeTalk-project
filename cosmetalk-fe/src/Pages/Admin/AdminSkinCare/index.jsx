import React, { useEffect, useState } from 'react'
import "./index.scss"
import { Link } from "react-router-dom";


function AdminSkinCare() {
  const [adminSkinCare, setAdminSkinCare] = useState([]);

  function getFetchSkinCareProducts() {
    fetch("http://localhost:3100/skincare")
      .then((res) => res.json())
      .then((data) => setAdminSkinCare(data));
  }
  useEffect(() => {
    getFetchSkinCareProducts();
  }, []);

  async function deleteSkinCare(id) {
    await fetch("http://localhost:3100/skincare/" + id, {
      method: "DELETE",
    });
    await getFetchSkinCareProducts();
  }
  return (
    <div className='adminSkinCare'>
      <div className="adminSkinCare_btn">
        <Link to={"/admin/addskincare"}>
          <button>
            <i className="fa-solid fa-plus"></i> Add SkinCare Product
          </button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Image1</th>
            <th>Image2</th>
            <th>Image3</th>
            <th>Image4</th>
            <th>Name</th>
            <th>About</th>
            <th>Category</th>
            <th>SubCategory</th>
            <th>Brand</th>
            <th>PackSize</th>
            <th>Price</th>
            <th>Texture</th>
            <th>Application</th>
            <th>Effect</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {adminSkinCare.map((x) => (
            <tr>
              <td>
                <div className="table_img">
                  <img src={x.thumbnail} alt="" />
                </div>
              </td>
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
              <td>{x.name}</td>
              <td>{x.about.slice(0, 70)}...</td>
              <td>{x.category}</td>
              <td>{x.subCategory}</td>
              <td>{x.brand}</td>
              <td>{x.packSize}</td>
              <td>{x.price}</td>
              <td>{x.texture}</td>
              <td>{x.application}</td>
              <td>{x.effect}</td>
              <td className="table_icon">
              <Link to={"/admin/updateskincare/"+x._id}><i className="fa-regular fa-pen-to-square"></i></Link>
                <i onClick={() => deleteSkinCare(x._id)} className="fa-regular fa-trash-can"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminSkinCare