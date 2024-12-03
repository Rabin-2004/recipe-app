import { useState, useContext, createContext } from "react";

const SearchContext = createContext();

export const useSearch = () => {
   return useContext(SearchContext);
}

export const SearchProvider = ({children}) => {

    const [search, setSearch] = useState("");
    const [foodData, setFoodData] = useState([]);

    return (
        <SearchContext.Provider value ={{search, setSearch, foodData, setFoodData}}>
            {children}
        </SearchContext.Provider>
    )
}