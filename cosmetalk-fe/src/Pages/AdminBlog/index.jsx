import React from 'react'
import "./index.scss"

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
  return (
    <div className='adminBlog'>
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
              <td>{x.price}</td>
              <td>{x.packSize}</td>
              <td>{x.pigmentation}</td>
              <td>{x.texture}</td>
              <td>{x.effect}</td>
              <td>{x.longevity}</td>
              <td className="table_icon">
                <i className="fa-regular fa-pen-to-square"></i>
                <i className="fa-regular fa-trash-can"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default AdminBlog