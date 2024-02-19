import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss"

function UpdateMakeUp() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [thumbnail, setthumbnail] = useState("");
  const [image1, setimage1] = useState("");
  const [image2, setimage2] = useState("");
  const [image3, setimage3] = useState("");
  const [image4, setimage4] = useState("");
  const [name, setname] = useState("");
  const [about, setabout] = useState("");
  const [category, setcategory] = useState("");
  const [subCategory, setsubCategory] = useState("");
  const [brand, setbrand] = useState("");
  const [price, setprice] = useState("");
  const [pigmentation, setpigmentation] = useState("");
  const [texture, settexture] = useState("");
  const [application, setapplication] = useState("");
  const [longevity, setlongevity] = useState("");

  async function getFetchMakeUpProducts() {
    const responese = await fetch("http://localhost:3100/makeup/" + id);
    const data = await responese.json();
    setthumbnail(data.thumbnail);
    setimage1(data.image1);
    setimage2(data.image2);
    setimage3(data.image3);
    setimage4(data.image4);
    setname(data.name);
    setabout(data.about);
    setcategory(data.category);
    setsubCategory(data.subCategory);
    setbrand(data.brand);
    setprice(data.price);
    setpigmentation(data.pigmentation);
    settexture(data.texture);
    setapplication(data.application);
    setlongevity(data.longevity);
  }
  useEffect(() => {
    getFetchMakeUpProducts();
  }, []);

  function updateMakeUp() {
    fetch("http://localhost:3100/makeup/" + id, {
      method: "PUT",
      body: JSON.stringify({
        thumbnail: thumbnail,
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
        name: name,
        about: about,
        category: category,
        subCategory: subCategory,
        brand: brand,
        price: price,
        pigmentation: pigmentation,
        texture: texture,
        application: application,
        longevity: longevity,
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
      })
      navigate("/admin/makeup")
  }
  return (
    <div className="updateMakeUp">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateMakeUp();
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
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name=""
          id="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <label htmlFor="about">About:</label>
        <input
          type="text"
          name=""
          id="about"
          value={about}
          onChange={(e) => setabout(e.target.value)}
        />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          name=""
          id="category"
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        />
        <label htmlFor="subCategory">SubCategory:</label>
        <input
          type="text"
          name=""
          id="subCategory"
          value={subCategory}
          onChange={(e) => setsubCategory(e.target.value)}
        />
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          name=""
          id="brand"
          value={brand}
          onChange={(e) => setbrand(e.target.value)}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          name=""
          id="price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <label htmlFor="pigmentation">Pigmentation:</label>
        <input
          type="text"
          name=""
          id="pigmentation"
          value={pigmentation}
          onChange={(e) => setpigmentation(e.target.value)}
        />
        <label htmlFor="texture">Texture:</label>
        <input
          type="text"
          name=""
          id="texture"
          value={texture}
          onChange={(e) => settexture(e.target.value)}
        />
        <label htmlFor="application">Application:</label>
        <input
          type="text"
          name=""
          id="application"
          value={application}
          onChange={(e) => setapplication(e.target.value)}
        />
        <label htmlFor="longevity">Longevity:</label>
        <input
          type="text"
          name=""
          id="longevity"
          value={longevity}
          onChange={(e) => setlongevity(e.target.value)}
        />
        <button>Save</button>
      </form>
    </div>
  );
}

export default UpdateMakeUp;
