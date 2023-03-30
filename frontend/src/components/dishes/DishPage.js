import Header from './Header'
import Dishes from './Dishes'
import { useState, useEffect } from "react";
import AddDish from './AddDish';
import KitchenHeader from '../homepage/kitchenheader';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './DishesStyle.css';
import UserBar from '../homepage/userheader';
import { BACKEND_API } from '../../config';
import Footer from '../files/footer/Footer';


const DishPage = (props) => {
    //console.log(props);
    const API_URL = `${BACKEND_API}/api/v1/dishes/`;

    const [dishes, setDishes] = useState([
    ]);

    useEffect(() => {
        const getDishes = async () => {
            const dishesFromServer = await fetchDishes();
            let filteredDishes = dishesFromServer.filter((dish) => dish.kitchenId === props.loginUser._id);
            let dishesFixed = filteredDishes.map((dish) => {
                let dishFixed = { name: dish.name, description: dish.description, veg: dish.veg, id: dish._id, imageurl: dish.imageurl };
                return dishFixed;
            });
            setDishes(dishesFixed);
        }
        getDishes();
    }, [dishes]); //[dishes]Hack for getting data again from server after adding new dish, post dish await not working as expected

    const fetchDishes = async () => {
        const res = await fetch(API_URL);
        const data = await res.json();
        //    console.log(data);
        return data;
    }

    const [showAddDish, setShowAddDish] = useState(false);

    const postDishes = async (dish) => {
        dish.kitchenId = props.loginUser._id;
        console.log(dish);
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(dish)
        });

        return await res.json();
    }

    const addDish = async (dish) => {
        const data = await postDishes(dish);
        const id = data._id; //Not Working correctly
        const newDish = { id, ...dish };

        setDishes([...dishes, newDish]);

        // const Id = Math.floor(Math.random() * 1000) + 1;

        // const newDish = { Id, ...dish };
        // setDishes([...dishes, newDish]);
    }

    const deleteDish = async (id) => {
        await fetch(API_URL + id, { method: 'DELETE' });

        setDishes(dishes.filter((dish) => dish.id !== id))
    }

    return (
        <div className="ownerpage">
            <div className="side-menu-bar">
                <KitchenHeader />
            </div>

            <div className="user-header">
                <UserBar />
            </div>

            <div className='dishpage-container'>
                <div className='dishform-container'>
                    <h2>Add Dish</h2>
                    <AddDish onAddDish={addDish} />
                </div>

                <div className='dishlist-container'>
                    <h2>Dishes</h2>
                    <Dishes dishes={dishes} onDelete={deleteDish} />
                </div>
            </div>

            <div className="site-footer">
                <Footer />
            </div>
        </div>
    )
}

export default DishPage