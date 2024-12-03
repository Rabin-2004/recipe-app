import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import Data from "./Data";

const Fetch = () => {
  const { foodData, setFoodData } = useSearch();

  const location = useLocation();
  const queryParameter = new URLSearchParams(location.search);
  const searchQuery = queryParameter.get("query");

  useEffect(() => {
    function fetchFood() {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          return response.json(); 
        })
        .then((data) => {
          setFoodData(data.meals || []); 
        })
        .catch((err) => {
          console.log(`Error fetching food data: ${err}`);
        });
    }

    if (searchQuery) {
      fetchFood();
    }
  }, [searchQuery, setFoodData]); 

  return (
    <div style={{margin:"10px"}}>
      <h2>Search Results for: {searchQuery}</h2>
      {foodData && foodData.length > 0 ? (
        <Data />
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default Fetch;
