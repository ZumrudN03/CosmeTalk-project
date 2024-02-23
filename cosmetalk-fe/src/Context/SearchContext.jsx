// import React, { useContext } from "react";
// import { useState } from "react";
// import { createContext } from "react";

// export const SearchContext = createContext();

// function SearchProvider({ children }) {
//   const [search, setSearch] = useState("");

//   function handleSearch(e) {
//     setSearch(e.target.value);
//   }

//   async function searchBothEndpoints() {
//     try {
//       const response1 = await fetch("http://localhost:3100/makeup");
//       const response2 = await fetch("http://localhost:3100/skincare");

//       if (!response1.ok || !response2.ok) {
//         throw new Error("One or more requests failed");
//       }

//       const data1 = await response1.json();
//       const data2 = await response2.json();

//       console.log("Data from endpoint1:", data1);
//       console.log("Data from endpoint2:", data2);
//     } catch (error) {
//       console.error("Error during fetch:", error);
//     }
//   }
//   return (
//     <SearchContext.Provider value={{ search, handleSearch, searchBothEndpoints }}>
//       {children}
//     </SearchContext.Provider>
//   );
// }

// export function useSearch() {
//   return useContext(SearchContext).search;
// }

// export function useHandleSearch() {
//   return useContext(SearchContext).handleSearch;
// }

// export function useSearchBothEndpoints() {
//   return useContext(SearchContext).searchBothEndpoints;
// }

// export default SearchProvider;
