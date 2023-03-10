import React from 'react'
import { useState, useEffect } from "react";
import MealDetails from './MealDetails';


const ViewMealPage = () => {

    const MEAL_API_URL = "http://localhost:8080/api/v1/meal/";

    const [mealsData, setMealsData] = useState([]);
    const [mealTiles, setMealTiles] = useState([]);

    useEffect(() =>{

        fetch(MEAL_API_URL)
            .then(res => res.json())
            .then(data => {
                setMealsData(data);
                let mealTilesArray = [];

                data.forEach(meal => {
                    const mealObj = {
                        mealId : meal._id,
                        customerName : meal.customerId,
                        kitchenName : meal.kitchenId,
                        planName : meal.planId,
                        date: meal.date,
                        dishes: meal.dishes
                    }
                    mealTilesArray.push(<MealDetails mealData={mealObj}/>);
                });
                setMealTiles(mealTilesArray);
            });

            //Get Customer Name
            //Get Kitchen Name
            //Get Plan Name
            //Get Dishes Name

    },[]);

  return (
    <div>ViewMealPage
        <br></br><br></br>
        {mealTiles}
    </div>
  )
}

export default ViewMealPage