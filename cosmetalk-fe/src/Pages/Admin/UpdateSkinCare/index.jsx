import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss"

function UpdateSkinCare() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [thumbnail, setthumbnail] = useState("");
    const [name, setname] = useState("");
    const [about, setabout] = useState("");
    const [category, setcategory] = useState("");
    const [brand, setbrand] = useState("");
    const [packSize, setpackSize] = useState("");
    const [price, setprice] = useState("");
    const [texture, settexture] = useState("");
    const [application, setapplication] = useState("");
    const [effect, seteffect] = useState("");

    async function getFetchSkinCareProducts() {
        const responese = await fetch("http://localhost:3100/skincare/" + id);
        const data = await responese.json();
        setthumbnail(data.thumbnail);
        setname(data.name);
        setabout(data.about);
        setcategory(data.category);
        setbrand(data.brand);
        setpackSize(data.packSize);
        setprice(data.price);
        settexture(data.texture);
        setapplication(data.application);
        seteffect(data.effect);
      }
      useEffect(() => {
        getFetchSkinCareProducts();
      }, []);

      function updateSkinCare() {
        fetch("http://localhost:3100/skincare/" + id, {
          method: "PUT",
          body: JSON.stringify({
            thumbnail: thumbnail,
            name: name,
            about: about,
            category: category,
            brand: brand,
            packSize: packSize,
            price: price,
            texture: texture,
            application: application,
            effect: effect,
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
          navigate("/admin/skincare")
      }

  return (
    <div className='updateSkinCare'>
         <form
        onSubmit={(e) => {
          e.preventDefault();
          updateSkinCare();
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
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          name=""
          id="brand"
          value={brand}
          onChange={(e) => setbrand(e.target.value)}
        />
        <label htmlFor="packSize">PackSize:</label>
        <input
          type="text"
          name=""
          id="packSize"
          value={packSize}
          onChange={(e) => setpackSize(e.target.value)}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          name=""
          id="price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
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
        <label htmlFor="effect">Effect:</label>
        <input
          type="text"
          name=""
          id="effect"
          value={effect}
          onChange={(e) => seteffect(e.target.value)}
        />
        <button>Save</button>
      </form>
    </div>
  )
}

export default UpdateSkinCare