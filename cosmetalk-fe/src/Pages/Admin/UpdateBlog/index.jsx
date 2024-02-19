import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";

function UpdateBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [thumbnail, setthumbnail] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [image1, setimage1] = useState("");
  const [image2, setimage2] = useState("");
  const [image3, setimage3] = useState("");
  const [image4, setimage4] = useState("");
  const [image5, setimage5] = useState("");
  const [sub1, setsub1] = useState("");
  const [sub2, setsub2] = useState("");
  const [sub3, setsub3] = useState("");
  const [sub4, setsub4] = useState("");
  const [sub5, setsub5] = useState("");
  const [name1, setname1] = useState("");
  const [name2, setname2] = useState("");
  const [name3, setname3] = useState("");
  const [name4, setname4] = useState("");
  const [name5, setname5] = useState("");

  async function getFetchBlog() {
    const responese = await fetch("http://localhost:3100/blog/" + id);
    const data = await responese.json();
    setthumbnail(data.thumbnail);
    settitle(data.title);
    setdesc(data.desc);
    setimage1(data.image1);
    setimage2(data.image2);
    setimage3(data.image3);
    setimage4(data.image4);
    setimage5(data.image5);
    setsub1(data.sub1);
    setsub2(data.sub2);
    setsub3(data.sub3);
    setsub4(data.sub4);
    setsub5(data.sub5);
    setname1(data.name1);
    setname2(data.name2);
    setname3(data.name3);
    setname4(data.name4);
    setname5(data.name5);
  }
  useEffect(() => {
    getFetchBlog();
  }, []);

  function updateBlog() {
    fetch("http://localhost:3100/blog/" + id, {
      method: "PUT",
      body: JSON.stringify({
        thumbnail: thumbnail,
        title: title,
        desc: desc,
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
        image5: image5,
        sub1: sub1,
        sub2: sub2,
        sub3: sub3,
        sub4: sub4,
        sub5: sub5,
        name1: name1,
        name2: name2,
        name3: name3,
        name4: name4,
        name5: name5,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    navigate("/admin/blog");
  }

  return (
    <div className="updateBlog">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateBlog();
        }}
      >
        <label htmlFor="thumbnail">Thumbnail:</label>
        <input
          type="text"
          name=""
          id="thumbnail"
          value={thumbnail}
          onChange={(e) => setthumbnail(e.target.value)}
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name=""
          id="title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <label htmlFor="desc">Description:</label>
        <input
          type="text"
          name=""
          id="desc"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <label htmlFor="image1">Image1:</label>
        <input
          type="text"
          name=""
          id="image1"
          value={image1}
          onChange={(e) => setimage1(e.target.value)}
        />
        <label htmlFor="image2">Image2:</label>
        <input
          type="text"
          name=""
          id="image2"
          value={image2}
          onChange={(e) => setimage2(e.target.value)}
        />
        <label htmlFor="image3">Image3:</label>
        <input
          type="text"
          name=""
          id="image3"
          value={image3}
          onChange={(e) => setimage3(e.target.value)}
        />
        <label htmlFor="image4">Image4:</label>
        <input
          type="text"
          name=""
          id="image4"
          value={image4}
          onChange={(e) => setimage4(e.target.value)}
        />
        <label htmlFor="image5">Image5:</label>
        <input
          type="text"
          name=""
          id="image5"
          value={image5}
          onChange={(e) => setimage5(e.target.value)}
        />
        <label htmlFor="sub1">Sub1:</label>
        <input
          type="text"
          name=""
          id="sub1"
          value={sub1}
          onChange={(e) => setsub1(e.target.value)}
        />
        <label htmlFor="sub2">Sub2:</label>
        <input
          type="text"
          name=""
          id="sub2"
          value={sub2}
          onChange={(e) => setsub2(e.target.value)}
        />
        <label htmlFor="sub3">Sub3:</label>
        <input
          type="text"
          name=""
          id="sub3"
          value={sub3}
          onChange={(e) => setsub3(e.target.value)}
        />
        <label htmlFor="sub4">Sub4:</label>
        <input
          type="text"
          name=""
          id="sub4"
          value={sub4}
          onChange={(e) => setsub4(e.target.value)}
        />
        <label htmlFor="sub5">Sub5:</label>
        <input
          type="text"
          name=""
          id="sub5"
          value={sub5}
          onChange={(e) => setsub5(e.target.value)}
        />
        <label htmlFor="name1">Name1:</label>
        <input
          type="text"
          name=""
          id="name1"
          value={name1}
          onChange={(e) => setname1(e.target.value)}
        />
        <label htmlFor="name2">Name2:</label>
        <input
          type="text"
          name=""
          id="name2"
          value={name2}
          onChange={(e) => setname2(e.target.value)}
        />
        <label htmlFor="name3">Name3:</label>
        <input
          type="text"
          name=""
          id="name3"
          value={name3}
          onChange={(e) => setname3(e.target.value)}
        />
        <label htmlFor="name4">Name4:</label>
        <input
          type="text"
          name=""
          id="name4"
          value={name4}
          onChange={(e) => setname4(e.target.value)}
        />
        <label htmlFor="name5">Name5:</label>
        <input
          type="text"
          name=""
          id="name5"
          value={name5}
          onChange={(e) => setname5(e.target.value)}
        />
        <button>Save</button>
      </form>
    </div>
  );
}

export default UpdateBlog;
