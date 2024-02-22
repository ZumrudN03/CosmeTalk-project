import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function MakeUpReviewsCards() {
  const [makeUpCard, setMakeUpCard] = useState([]);
  const [filterData, setFilterData] = useState("All")
  const [isOpenFace, setIsOpenFace] = useState(false);
  const [isOpenEyes, setIsOpenEyes] = useState(false);
  const [isOpenLips, setIsOpenLips] = useState(false);
  const [isIconUpFace, setIsIconUpFace] = useState(false);
  const [isIconUpEyes, setIsIconUpEyes] = useState(false);
  const [isIconUpLips, setIsIconUpLips] = useState(false);


  function onClickFunc(category) {
    if (category === "face") {
      setIsOpenFace(!isOpenFace);
      setIsOpenEyes(false);
      setIsOpenLips(false);
      setIsIconUpFace(!isIconUpFace);
      setIsIconUpEyes(false);
      setIsIconUpLips(false);
    } else if (category === "eyes") {
      setIsOpenEyes(!isOpenEyes);
      setIsOpenFace(false);
      setIsOpenLips(false);
      setIsIconUpEyes(!isIconUpEyes);
      setIsIconUpFace(false);
      setIsIconUpLips(false);
    } else if (category === "lips") {
      setIsOpenLips(!isOpenLips);
      setIsOpenFace(false);
      setIsOpenEyes(false);
      setIsIconUpLips(!isIconUpLips);
      setIsIconUpFace(false);
      setIsIconUpEyes(false);
    }
  }

  function getFetchMakeUpProducts() {
    fetch("http://localhost:3100/makeup")
      .then((res) => res.json())
      .then((data) => setMakeUpCard(data));
  }
  useEffect(() => {
    getFetchMakeUpProducts();
  }, []);

  const FilterProduct = (subCategory) => {
    setFilterData(subCategory);
  }

  const dataProducts = filterData === "All" 
    ? makeUpCard 
    : makeUpCard.filter((item) => item.subCategory === filterData);

  return (
    <>
      <div className="makeup_categories">
      <button onClick={() => FilterProduct("All")} className="all_btn">All</button>
        <div className="isOpen_Container">
          <p onClick={() => onClickFunc("face")}>
            Face
            <i
              className={`fa-solid ${
                isIconUpFace ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </p>
          {isOpenFace && (
            <div className="makeup_categories_container face">
              <button>Bronzer</button>
              <button>Blush</button>
              <button>Concealer</button>
              <button>Contour</button>
              <button>Foundation</button>
              <button onClick={()=>FilterProduct("HIGHLIGHTER")}>Highlighter</button>
              <button>Primer</button>
              <button>Powder</button>
            </div>
          )}
        </div>
        <div className="isOpen_Container">
          <p onClick={() => onClickFunc("eyes")}>
            Eyes
            <i
              className={`fa-solid ${
                isIconUpEyes ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </p>
          {isOpenEyes && (
            <div className="makeup_categories_container eyes">
              <button onClick={()=>FilterProduct("EYEBROW")}>Eyebrow</button>
              <button onClick={()=>FilterProduct("EYESHADOW")}>Eyeshadow</button>
              <button onClick={()=>FilterProduct("MASKARA")}>Mascara</button>
            </div>
          )}
        </div>
        <div className="isOpen_Container">
          <p onClick={() => onClickFunc("lips")}>
            Lips
            <i
              className={`fa-solid ${
                isIconUpLips ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </p>
          {isOpenLips && (
            <div className="makeup_categories_container lips">
              <button>Lip Pencil</button>
              <button onClick={()=>FilterProduct("LIPGLOSS")}>Lip Gloss</button>
              <button>Lipstick</button>
            </div>
          )}
        </div>
      </div>
      <div className="makeUpReviewsCards">
        {dataProducts.map((x) => (
          <div key={x._id} className="makeUpReviewsCard">
            <div className="makeUpReviewsCard_img">
              <img src={x.thumbnail} alt="" />
              <div className="makeUpReviewsCard_hover">
                <Link to={"/makeupcarddetail/" + x._id}>
                  <button className="makeUpReviewsCard_hover_btn">
                    OPEN REVIEW
                  </button>
                </Link>
              </div>
            </div>

            <div className="makeUpReviewsCard_categories">
              <p className="makeUpReviewsCard_category">
                <span>in </span>
                {x.category}
              </p>
              <i className="fa-solid fa-angle-right"></i>
              <p className="makeUpReviewsCard_subCategory">{x.subCategory}</p>
            </div>
            <p className="makeUpReviewsCard_name">{x.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MakeUpReviewsCards;
