// import React, { useContext } from "react";

// function SearchBar() {
//   const { search } = useContext(SearchContext);
//   const [searchBar, setSearchBar] = useState([]);
//   const [isLinkClicked, setLinkClicked] = useState(false);

//   useEffect(() => {
//     fetch("https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products")
//       .then((res) => res.json())
//       .then((data) => setSearchBar(data));
//   }, []);
//   function handleRefresh() {
//     setLinkClicked(true);
//     setTimeout(() => {
//       setLinkClicked(false);
//       window.location.reload();
//     }, 100);
//   }
//   return (
//     <div className="showDiv">
//       {searchBar
//         .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
//         .map((x) => (
//           <Link to={`/detail/${x.id}`} onClick={handleRefresh}>
//             <div className="searchBar_card">
//               <p> {x.name}</p>
//               <img src={x.image} />
//             </div>
//           </Link>
//         ))}
//     </div>
//   );
// }

// export default SearchBar;
