import React from 'react'
import { useState, useEffect } from "react";
import MealDetails from './MealDetails';
import KitchenHeader from '../homepage/kitchenheader';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UserBar from '../homepage/userheader';
import { BACKEND_API } from '../../config';
import Footer from '../files/footer/Footer';

const ViewMealPage = (props) => {
    const { isActive, setIsActive } = props;

    const MEAL_API_URL = `${BACKEND_API}/api/v1/meal/`;

    const [mealsData, setMealsData] = useState([]);
    const [mealTiles, setMealTiles] = useState([]);

    const DISHES_API_URL = `${BACKEND_API}/api/v1/dishes/`;
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
        <div className='ownerpage'>
            <div className={`${isActive ? 'show-side-bar' : ''} side-menu-bar`}>
                <KitchenHeader isActive={isActive} setIsActive={setIsActive}/>
            </div>

            <div className="user-header">
                <UserBar isActive={isActive} setIsActive={setIsActive}/>
            </div>
            <br></br><br></br>
            <div className='container'>
                {mealTiles}
            </div>
            <div className="site-footer">
                <Footer />
            </div>
        </div>
    )
}

export default ViewMealPage