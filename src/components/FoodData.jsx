import React from 'react';
import { Card, CardActions, CardContent, Button, Typography, CardMedia, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FoodData = ({ meal }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/recipe-detail?query=${meal.idMeal}`, { state: { meal } });
  }

  return (
    <Grid spacing={2} justifyContent="center" sx={{ padding: 2, width : '100%' }} >
      <Grid item xs={12} sm={6} md={2} lg={1}>
        <Card sx={{
          width: '30vw', 
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <CardMedia
            sx={{ 
              height: { xs: '200px', sm: '250px', md: '300px' },
              objectFit: 'cover',
            }}
            image={meal.strMealThumb}
            title={meal.strMeal}
          />

          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              {meal.strMeal}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Type: {meal.strArea} {meal.strCategory} Dish
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small" onClick={handleClick}>View Recipe</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FoodData;
