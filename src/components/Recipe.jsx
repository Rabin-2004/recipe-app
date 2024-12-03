import React from 'react'
import { useLocation } from 'react-router-dom'
import { Box, CardMedia, Typography } from '@mui/material';
import RecipeInstructions from './RecipeInstructions';

const Recipe = () => {

    const location = useLocation();

    const { meal } = location.state || {}

    const ingredientsAndMeaasures = [];


    for(let i=0; i<=20; i++){
        const ingredient = meal[`strIngredient${i}`]
        const measure = meal[`strMeasure${i}`]

        if (ingredient && ingredient.trim !== "" && measure && measure.trim !== "") {
            ingredientsAndMeaasures.push({ingredient, measure})
        }
    }

    return (
        <Box component="div" sx={{ margin: "10px" }}>

            <Typography variant='h4' gutterBottom>
                {meal.strMeal}
            </Typography>

                <Box component="div" sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2vw"

                }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                     alignItems: "flex-start",
                     paddingTop: "4vh"

                }}>
            
                <CardMedia component='img' image={meal.strMealThumb} sx={{
                    height: '60vh',
                    width: '40vw',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    
                }} />

                <div >
                    <h4>Ingredients List</h4>
                
                    {ingredientsAndMeaasures.map( (item, index)=> (
                        <li key={index}> {item.ingredient}: {item.measure} </li>
                    ))}
               
                </div>

                </Box>
                
                    <RecipeInstructions instructions={meal.strInstructions}/>

                </Box>

        </Box>

    )
}

export default Recipe