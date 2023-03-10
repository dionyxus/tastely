import React from 'react'

const MealDetails = ({mealData}) => {

 
  return (
    <div>MealDetails
        <li key={mealData._id}>
                <p>User Name - {mealData.customerName}</p>
                <p>KitchenName - {mealData.kitchenName}</p>
                <p>PlanName - {mealData.planName}</p>
                <p>Date - {mealData.date}</p>
                {mealData.dishes.map((dish, index) => {
                    return <p>Dish {index + 1} - {dish}</p>
                })}
              </li>
    </div>
  )
}

export default MealDetails