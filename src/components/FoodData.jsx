import React from 'react'
import { Card, CardActions, CardContent, Button, Typography, CardMedia,Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const FoodData = ({meal}) => {

    const navigate = useNavigate();

    function handleClick(){
        navigate(`/recipe-detail?query=${meal.idMeal}`, {state: {meal} })
    }

  return (
    <Box component="div" sx={{
        display: "flex",
        flexDirection:"columns"
    }}>

    <Card sx={{ 
        width: "25vw",
    }}>
        <CardMedia sx={{height: "45vh"}} image={meal.strMealThumb} title={meal.strMeal}/>

        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {meal.strMeal}
            </Typography>

            <Typography variant='body2' sx={{color: 'text.secondary'}}>
            Type: {meal.strArea} {meal.strCategory} Dish
            </Typography>
        </CardContent>

        <CardActions>
            <Button size='small' onClick={handleClick}> View Recipe </Button>
        </CardActions>

    </Card>

    </Box>
  )
}

export default FoodData