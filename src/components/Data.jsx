import { useSearch } from "../context/SearchContext";
import FoodData from "./FoodData";
import { Box } from "@mui/material";

const Data = () => {

    const {foodData} = useSearch();


    return (
        <Box component="div" sx={{
            display: "flex",
            "gap": "10px",
        }}>
          {foodData.map((meal, index) => (
            <FoodData key={index} meal={meal} index={index}/>
          ))}
        </Box>
      );
      
}

export default Data