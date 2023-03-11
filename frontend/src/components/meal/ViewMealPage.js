import React from 'react'
import { useState, useEffect } from "react";
import MealDetails from './MealDetails';
import KitchenHeader from '../homepage/kitchenheader';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ViewMealPage = (props) => {

    const MEAL_API_URL = "http://localhost:8080/api/v1/meal/";

    const [mealsData, setMealsData] = useState([]);
    const [mealTiles, setMealTiles] = useState([]);

    const DISHES_API_URL = "http://localhost:8080/api/v1/dishes/";
    //    const [dishes, setDishes] = useState([]);
    let dishes = [];

    useEffect(() => {

        fetch(DISHES_API_URL)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                //setDishes(data);
                dishes = data;
            });

        fetch(MEAL_API_URL)
            .then(res => res.json())
            .then(data => {
                
                data = data.filter(meal => meal.kitchenId === props.loginUser._id);
                setMealsData(data);
                let mealTilesArray = [];

                data.forEach(meal => {
                    const mealObj = {
                        mealId: meal._id,
                        customerName: meal.customerName,
                        kitchenName: meal.kitchenName,
                        planName: meal.planName,
                        date: meal.date,
                        dishes: meal.dishes
                    }
                    mealTilesArray.push(<MealDetails key={mealObj.mealId} mealData={mealObj} dishesData={dishes} />);
                });
                setMealTiles(mealTilesArray);
            });

    }, []);

    return (
        <div>
            <div className="side-menu-bar">
                <KitchenHeader />
            </div>

            <div className="user-header">
                <FaBell />
                <FaEnvelope />
                <h2>{'Welcome ' + props.loginUser.name + ''}</h2>
                <button className="button">
                    <Link to="/Login">Logout</Link>
                </button>
            </div>
            <br></br><br></br>
            <div className='container'>
                {mealTiles}
            </div>
        </div>
    )
}

export default ViewMealPage