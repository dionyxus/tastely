import React from 'react'

const MealDetails = ({ mealData, dishesData }) => {

  return (
    <div>
      <h3>MealDetails</h3>
      <p>User Name - {mealData.customerName}</p>
      <p>KitchenName - {mealData.kitchenName}</p>
      <p>PlanName - {mealData.planName}</p>
      <p>Date - {mealData.date}</p>
      {mealData.dishes.map((dishId, index) => {

        let dish = dishesData.filter(dish => dish._id === dishId);
        let dishName = dish.length > 0 ? dish[0].name : "None";

        return <p>Dish {index + 1} - {dishName}</p>
      })}
      <br></br>
    </div>
  )
}

export default MealDetails